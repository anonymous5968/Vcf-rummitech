const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const admin = require('firebase-admin');

// 1. Secure Firebase Authentication
let serviceAccount;
if (process.env.FIREBASE_CREDENTIALS) {
    // If on Heroku, parse the secure string
    serviceAccount = JSON.parse(process.env.FIREBASE_CREDENTIALS);
} else {
    // If local, use the file (which is hidden by .gitignore)
    serviceAccount = require('./serviceAccountKey.json');
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rummitechvcf-default-rtdb.firebaseio.com" // <-- CHANGE THIS
});
const db = admin.database();
// 2. Initialize WhatsApp Bot (Clean Heroku Setup)
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { 
        handleSIGINT: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-extensions'
        ] 
    }
});
client.on('qr', (qr) => {
    console.log('\nScan this QR code with your WhatsApp to link the bot:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('\n✅ Verification Bot is online and connected to WhatsApp!');
    console.log('📡 Listening for new bot developer registrations...\n');
});

// 3. Track active 10-second challenges
const activeChallenges = new Map();

// 4. Listen to Firebase for NEW registrations
db.ref('registrations').on('child_added', async (snapshot) => {
    const user = snapshot.val();
    const firebaseId = snapshot.key;

    if (user.type === 'bot' && user.status === 'pending') {
        const userPhone = user.tel.replace('+', ''); 
        const chatId = `${userPhone}@c.us`; 

        console.log(`[TRIGGER] New pending bot dev: ${user.fn} (${userPhone})`);

        try {
            await client.sendMessage(chatId, "⚠️ *VCF System Verification Check*\n\nTriggering your bot to verify ownership...\n\n.menu");

            const timeout = setTimeout(async () => {
                console.log(`[FAILED] Timeout for ${userPhone}. Removing from database.`);
                activeChallenges.delete(userPhone);
                await db.ref(`registrations/${firebaseId}`).remove();
                await client.sendMessage(chatId, "❌ *Verification Failed*\nYour bot did not respond with a menu within 10 seconds. Your registration has been removed.");
            }, 10000);

            activeChallenges.set(userPhone, { firebaseId, timeout });

        } catch (err) {
            console.error(`Failed to send message to ${userPhone}:`, err.message);
        }
    }
});

// 5. Listen for incoming WhatsApp replies
client.on('message', async (msg) => {
    const senderPhone = msg.from.split('@')[0];

    if (activeChallenges.has(senderPhone)) {
        const challenge = activeChallenges.get(senderPhone);
        console.log(`[SUCCESS] Received reply from ${senderPhone}! They passed.`);

        clearTimeout(challenge.timeout);
        await db.ref(`registrations/${challenge.firebaseId}`).update({ status: 'verified' });
        await client.sendMessage(msg.from, "✅ *Success!*\nYour bot has been verified. You are officially in the Bot Owners VCF queue. Keep an eye out for the drop!");
        activeChallenges.delete(senderPhone);
    }
});

client.initialize();
