<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>RUMMI TECH — VCF Generator</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>

  <style>
    :root {
      --bg-color: #0f172a;
      --card-bg: rgba(30, 41, 59, 0.7);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --primary: #6366f1;
      --primary-hover: #4f46e5;
      --success: #10b981;
      --danger: #ef4444;
      --border-color: rgba(255, 255, 255, 0.1);
    }

    * { box-sizing: border-box; }
    html, body { height: 100%; margin: 0; }
    body { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%); color: var(--text-main); font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: center; padding: 20px; }

    .card { width: 100%; max-width: 500px; background: var(--card-bg); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid var(--border-color); border-radius: 16px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); }
    h1 { margin: 0 0 24px 0; text-align: center; font-size: 24px; font-weight: 700; line-height: 1.2; padding-bottom: 5px; background: linear-gradient(to right, #818cf8, #c084fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }

    .reg-tabs { display: flex; background: rgba(0,0,0,0.3); border-radius: 10px; padding: 4px; margin-bottom: 16px; border: 1px solid var(--border-color); }
    .reg-tab { flex: 1; text-align: center; padding: 10px; font-size: 13px; font-weight: 600; color: var(--text-muted); cursor: pointer; border-radius: 8px; transition: all 0.2s; }
    .reg-tab.active { background: var(--primary); color: white; box-shadow: 0 2px 10px rgba(99, 102, 241, 0.3); }
    .bot-warning { display: none; background: rgba(99, 102, 241, 0.1); border: 1px solid var(--primary); padding: 16px; border-radius: 10px; margin-bottom: 16px; font-size: 13px; line-height: 1.5; }

    form { display: flex; flex-direction: column; gap: 16px; }
    input { padding: 14px 16px; border-radius: 10px; border: 1px solid var(--border-color); background: rgba(15, 23, 42, 0.6); color: var(--text-main); font-size: 15px; font-family: inherit; transition: all 0.2s ease; outline: none; }
    input:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2); }
    
    button { padding: 14px 16px; border-radius: 10px; border: none; background: var(--primary); color: white; cursor: pointer; font-size: 15px; font-weight: 600; font-family: inherit; transition: all 0.2s ease; width: 100%; }
    button:hover { background: var(--primary-hover); transform: translateY(-1px); }
    button.success { background: linear-gradient(135deg, #10b981 0%, #059669 100%); box-shadow: 0 4px 14px 0 rgba(16, 185, 129, 0.39); }
    button.danger { background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid rgba(239, 68, 68, 0.2); }
    
    .download-group { display: none; flex-direction: column; gap: 10px; }
    .btn-bot { background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); box-shadow: 0 4px 14px 0 rgba(139, 92, 246, 0.39); }

    .tracker { margin-top: 24px; padding: 20px; background: rgba(0, 0, 0, 0.2); border-radius: 12px; }
    .flex-between { display: flex; justify-content: space-between; align-items: center; }
    .tracker-text { font-size: 14px; color: var(--text-muted); }
    .tracker-value { font-weight: 600; color: var(--text-main); }
    
    /* Dual-Tracker Styles */
    .progress-bg { height: 8px; border-radius: 999px; background: rgba(255, 255, 255, 0.1); overflow: hidden; margin-top: 8px; }
    .progress-fill { height: 100%; width: 0%; transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
    .normal-fill { background: linear-gradient(90deg, #10b981, #34d399); }
    .bot-fill { background: linear-gradient(90deg, #818cf8, #c084fc); }

    .muted { color: var(--text-muted); font-size: 13px; text-align: center; margin-top: 8px; }
    
    /* Admin Styles */
    .admin-divider { height: 1px; background: var(--border-color); margin: 24px 0; }
    .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .admin-inputs { display: flex; gap: 8px; margin-bottom: 12px; }
    .admin-inputs input { flex: 1; }
    .admin-card { background: rgba(0, 0, 0, 0.2); border-radius: 12px; padding: 16px; margin-bottom: 16px; border: 1px solid rgba(255, 255, 255, 0.05); }
    .admin-search-input { width: 100%; padding: 10px; margin-bottom: 12px; font-size: 13px; border-radius: 8px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.1); color: white;}

    .badge { font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: 600; margin-left: 6px; }
    .badge.normal { background: rgba(16, 185, 129, 0.2); color: var(--success); }
    .badge.pending { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
    .badge.bot { background: rgba(139, 92, 246, 0.2); color: #c4b5fd; }

    .switch { position: relative; display: inline-block; width: 44px; height: 24px; margin-left: 10px;}
    .switch input { opacity: 0; width: 0; height: 0; }
    .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(255,255,255,0.1); transition: .4s; border-radius: 24px; border: 1px solid rgba(255,255,255,0.1); }
    .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px; background-color: var(--text-muted); transition: .4s; border-radius: 50%; }
    input:checked + .slider { background-color: var(--primary); border-color: var(--primary); }
    input:checked + .slider:before { transform: translateX(20px); background-color: white; }

    .btn-small { padding: 6px 12px; font-size: 12px; border-radius: 6px; width: auto; font-weight: 500;}
    .btn-small.outline { background: transparent; border: 1px solid var(--border-color); color: var(--text-muted); }
    
    .table-container { max-height: 250px; overflow-y: auto; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.05); background: rgba(15, 23, 42, 0.4); }
    table { width: 100%; border-collapse: collapse; font-size: 13px; text-align: left; }
    th { background: rgba(255, 255, 255, 0.05); padding: 10px; color: var(--text-muted); position: sticky; top: 0; font-weight: 500;}
    td { padding: 10px; border-bottom: 1px solid rgba(255, 255, 255, 0.02); color: var(--text-main); }
    tbody tr:hover { background: rgba(255, 255, 255, 0.03); }
    .delete-row-btn { background: transparent; border: none; color: var(--danger); font-size: 16px; font-weight: bold; cursor: pointer; padding: 0 5px; border-radius: 4px; }
    
    .whatsapp-links { margin-top: 20px; text-align: center; display: none; padding: 16px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; }
    .whatsapp-links p { margin: 0 0 12px 0; color: var(--success); font-weight: 500;}
    .whatsapp-links a { display: block; margin: 8px 0; color: #fff; text-decoration: none; font-weight: 600; background: #25D366; padding: 10px; border-radius: 8px; transition: opacity 0.2s; }

    .toast-container { position: fixed; top: 20px; right: 20px; z-index: 9999; display: flex; flex-direction: column; gap: 10px; pointer-events: none;}
    .toast { background: var(--card-bg); backdrop-filter: blur(10px); border: 1px solid var(--border-color); color: white; padding: 14px 20px; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.4); font-size: 14px; font-weight: 500; animation: slideIn 0.3s ease forwards; opacity: 0; transform: translateX(100%); pointer-events: auto;}
    .toast.error { border-left: 4px solid var(--danger); }
    .toast.success { border-left: 4px solid var(--success); }
    @keyframes slideIn { to { opacity: 1; transform: translateX(0); } }
    @keyframes fadeOut { to { opacity: 0; transform: translateX(100%); } }

    @media(max-width: 560px) {
      body { padding: 0; align-items: flex-start; }
      .card { padding: 40px 24px 24px 24px; border-radius: 0; border: none; min-height: 100vh; display: flex; flex-direction: column; justify-content: center;}
      .admin-inputs { flex-direction: column; }
    }
  </style>
</head>
<body>
  
  <div id="toastContainer" class="toast-container"></div>

  <div class="card" role="main">
    <h1>RUMMI TECH VCF</h1>

    <form id="vcfForm" autocomplete="off" novalidate>
      <div class="reg-tabs">
        <div class="reg-tab active" data-type="normal">👤 Standard User</div>
        <div class="reg-tab" data-type="bot">🤖 Bot Developer</div>
      </div>

      <div id="botWarning" class="bot-warning">
        <strong style="color: var(--primary); font-size: 14px; display: block; margin-bottom: 4px;">⚠️ Admin Verification Required</strong>
        Register below. Once submitted, you will be given a direct link to message our Admin on WhatsApp to command your bot and prove ownership.
      </div>

      <input id="name" type="text" placeholder="Full name" required />
      <input id="phone" type="tel" placeholder="Phone e.g. +254712345678" required />
      
      <button id="submitBtn" type="submit">Join Community</button>
      
      <div id="downloadGroup" class="download-group">
        <button id="downloadNormalBtn" type="button" class="success">📥 Download Standard VCF</button>
        <button id="downloadBotBtn" type="button" class="btn-bot">🤖 Download Bot Owners VCF</button>
      </div>
      <div id="downloadMessage" class="muted"></div>
    </form>

    <div class="tracker">
      <div class="flex-between" style="margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 12px;">
        <span class="tracker-text">Community Goal (Per List)</span>
        <span class="tracker-value" id="targetCount">0</span>
      </div>

      <div style="margin-bottom: 20px;">
        <div class="flex-between">
          <span class="tracker-text" style="color: var(--success); font-weight: 500;">👤 Standard Users</span>
          <span class="tracker-value" id="normalCount">0</span>
        </div>
        <div class="progress-bg"><div id="normalProgressFill" class="progress-fill normal-fill"></div></div>
      </div>

      <div>
        <div class="flex-between">
          <span class="tracker-text" style="color: #c4b5fd; font-weight: 500;">🤖 Bot Developers</span>
          <span class="tracker-value" id="botCount">0</span>
        </div>
        <div class="progress-bg"><div id="botProgressFill" class="progress-fill bot-fill"></div></div>
      </div>
    </div>

    <div class="whatsapp-links" id="whatsappLinks">
      <p id="successMsg">Registration Successful! 🎉</p>
      
      <div id="normalUserLinks">
        <a href="https://chat.whatsapp.com/JUkz9U1unTrGt5WgJlPMjT" target="_blank">Join WhatsApp Group</a>
        <a href="https://whatsapp.com/channel/0029VbB6mU14dTnPVhEaBS1C" target="_blank">Join Channel</a>
      </div>

      <div id="botUserLinks" style="display: none;">
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px; font-weight: normal;">Click below to message the Admin and demonstrate your bot.</p>
        <a id="botVerifyBtn" href="#" target="_blank" style="background: var(--primary); box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);">📲 Message Admin to Verify</a>
      </div>
    </div>

    <div class="admin-divider"></div>

    <div id="adminLoginSection">
      <p class="muted" style="margin-bottom: 12px;">Admin Access</p>
      <div class="admin-inputs">
        <input id="adminEmail" type="email" placeholder="Email">
        <input id="adminPassword" type="password" placeholder="Password">
      </div>
      <button id="adminLoginBtn" style="background: rgba(255,255,255,0.1);">Login securely</button>
      <p id="adminLoginStatus" class="muted"></p>
    </div>

    <div id="adminPanel" style="display:none;">
      <div class="admin-header">
        <p id="adminMsg" style="margin: 0; color: var(--primary); font-weight: 600; font-size: 14px;"></p>
        <button id="logoutBtn" class="btn-small outline">Logout</button>
      </div>

      <div class="admin-card">
        <label>Verified Goal Setting</label>
        <div class="admin-inputs" style="margin-bottom: 0;">
          <input id="targetInput" type="number" placeholder="New target" min="1" />
          <button id="setTargetBtn">Update</button>
        </div>
        
        <div class="flex-between" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05);">
          <label style="margin: 0;">Admin-Only Download</label>
          <label class="switch">
            <input type="checkbox" id="adminOnlyToggle">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="admin-card">
        <div class="flex-between" style="margin-bottom: 12px;">
          <label style="margin: 0;">Recent Registrations</label>
          <button id="csvBtn" class="btn-small success">📥 Export CSV</button>
        </div>
        <input id="adminSearch" type="text" placeholder="Search by name or phone..." class="admin-search-input">
        <div class="table-container">
          <table>
            <thead>
              <tr><th>Name</th><th>Phone</th><th style="width:70px">Actions</th></tr>
            </thead>
            <tbody id="adminTableBody"></tbody>
          </table>
        </div>
        <button id="resetBtn" class="danger" style="margin-top: 12px;">🗑️ Clear All Data</button>
      </div>
    </div>

    <footer>© RUMMI TECH SOLUTIONS</footer>
  </div>

  <script type="module">
    import { db, auth } from "./firebase-config.js";
    import { ref, set, push, onValue, get, child, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
    import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

    let isAdmin = false;
    let adminOnlyDownload = false;
    let targetCount = 100;
    
    // NEW: Separate Counters
    let verifiedNormal = 0;
    let verifiedBot = 0;
    
    // --- ADMIN WHATSAPP NUMBER HERE ---
    const ADMIN_WHATSAPP_NUMBER = "254745612717"; 
    
    let currentRegType = "normal";
    const regTabs = document.querySelectorAll('.reg-tab');
    const botWarning = document.getElementById('botWarning');

    regTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        regTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentRegType = tab.getAttribute('data-type');
        botWarning.style.display = currentRegType === 'bot' ? 'block' : 'none';
      });
    });

    function showToast(msg, type="success") {
      const container = document.getElementById("toastContainer");
      const toast = document.createElement("div");
      toast.className = `toast ${type}`;
      toast.textContent = msg;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.animation = "fadeOut 0.3s ease forwards";
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    const form = document.getElementById("vcfForm");
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const submitBtn = document.getElementById("submitBtn");
    
    const downloadGroup = document.getElementById("downloadGroup");
    const downloadNormalBtn = document.getElementById("downloadNormalBtn");
    const downloadBotBtn = document.getElementById("downloadBotBtn");
    const downloadMessage = document.getElementById("downloadMessage");
    
    const targetEl = document.getElementById("targetCount");
    const normalCountEl = document.getElementById("normalCount");
    const botCountEl = document.getElementById("botCount");
    const normalProgressFill = document.getElementById("normalProgressFill");
    const botProgressFill = document.getElementById("botProgressFill");
    
    const successMsg = document.getElementById("successMsg");
    const whatsappLinks = document.getElementById("whatsappLinks");
    const normalUserLinks = document.getElementById("normalUserLinks");
    const botUserLinks = document.getElementById("botUserLinks");
    const botVerifyBtn = document.getElementById("botVerifyBtn");

    const adminLoginSection = document.getElementById("adminLoginSection");
    const adminLoginBtn = document.getElementById("adminLoginBtn");
    const adminPanel = document.getElementById("adminPanel");
    const adminEmail = document.getElementById("adminEmail");
    const adminPassword = document.getElementById("adminPassword");
    const logoutBtn = document.getElementById("logoutBtn");
    const resetBtn = document.getElementById("resetBtn");
    const setTargetBtn = document.getElementById("setTargetBtn");
    const targetInput = document.getElementById("targetInput");
    const adminMsg = document.getElementById("adminMsg");
    const adminTableBody = document.getElementById("adminTableBody");
    const adminSearch = document.getElementById("adminSearch");
    const csvBtn = document.getElementById("csvBtn");
    const adminOnlyToggle = document.getElementById("adminOnlyToggle");

    const registrationsRef = ref(db, "registrations");
    const targetRef = ref(db, "target");
    const settingsRef = ref(db, "settings/adminOnlyDownload");

    function escapeV(v){ return String(v).replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/,/g,"\\,").replace(/;/g,"\\;"); }

    // NEW: Smart Download Logic
    function updateVisibility() {
      let normalUnlocked = verifiedNormal >= targetCount && targetCount > 0;
      let botUnlocked = verifiedBot >= targetCount && targetCount > 0;

      if (adminOnlyDownload && !isAdmin) {
        downloadGroup.style.display = "none";
        downloadMessage.textContent = "🔒 Downloads restricted to Admin only.";
      } else {
        downloadGroup.style.display = (normalUnlocked || botUnlocked) ? "flex" : "none";
        
        downloadNormalBtn.style.display = normalUnlocked ? "block" : "none";
        downloadBotBtn.style.display = botUnlocked ? "block" : "none";

        if (normalUnlocked && botUnlocked) {
            downloadMessage.textContent = "🎉 All VCFs unlocked and ready!";
        } else if (normalUnlocked) {
            downloadMessage.textContent = `Standard unlocked! Bot VCF needs ${targetCount - verifiedBot} more.`;
        } else if (botUnlocked) {
            downloadMessage.textContent = `Bot unlocked! Standard VCF needs ${targetCount - verifiedNormal} more.`;
        } else {
            downloadMessage.textContent = `Files unlock automatically at ${targetCount} verified users.`;
        }
      }
    }

    onValue(settingsRef, (snap) => {
      adminOnlyDownload = snap.exists() ? snap.val() : false;
      if(adminOnlyToggle) adminOnlyToggle.checked = adminOnlyDownload;
      updateVisibility();
    });

    if(adminOnlyToggle) {
      adminOnlyToggle.addEventListener("change", async (e) => {
        try {
          await set(settingsRef, e.target.checked);
          showToast(e.target.checked ? "Public downloads Locked 🔒" : "Public downloads Unlocked 🔓", "success");
        } catch (err) {
          e.target.checked = !e.target.checked; 
        }
      });
    }

    onValue(targetRef, (snap) => {
      if (snap.exists()) targetCount = Number(snap.val());
      targetEl.textContent = targetCount;
      updateVisibility();
    });

    form.addEventListener("submit", async (e)=>{
      e.preventDefault();
      const name = (nameInput.value||"").trim();
      let phone = (phoneInput.value||"").trim().replace(/\s+/g,"");

      if(!name){ showToast("Please enter a full name", "error"); return; }
      if(!phone || !phone.startsWith("+") || phone.length<8){ showToast("Phone must start with country code (+254...)", "error"); return; }

      try{
        // NEW: Smart Duplicate Check (Allows registration in both tabs)
        const snap = await get(registrationsRef);
        if(snap.exists()){
          const exists = Object.values(snap.val()).some(r => r.tel === phone && (r.type || 'normal') === currentRegType);
          if(exists){ 
            const typeName = currentRegType === 'bot' ? 'Bot Developer' : 'Standard User';
            showToast(`This number is already registered as a ${typeName}.`, "error"); 
            return; 
          }
        }
        
        submitBtn.textContent = "Saving to Database...";
        submitBtn.style.opacity = "0.7";

        const initialStatus = currentRegType === 'bot' ? 'pending' : 'verified';

        await push(registrationsRef, { 
          fn: name, 
          tel: phone, 
          type: currentRegType, 
          status: initialStatus,
          timestamp: new Date().toISOString() 
        });
        
        if (currentRegType === 'bot') {
            successMsg.textContent = "Registration Received!";
            normalUserLinks.style.display = "none";
            botUserLinks.style.display = "block";
            
            const message = encodeURIComponent(`Hi Admin! I just registered for the Bot VCF.\nMy registered number is: ${phone}\n\nI am ready to demonstrate my bot command.`);
            botVerifyBtn.href = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${message}`;
        } else {
            confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
            successMsg.textContent = "Registration Successful! 🎉";
            normalUserLinks.style.display = "block";
            botUserLinks.style.display = "none";
        }

        nameInput.value=""; phoneInput.value="";
        submitBtn.textContent = "Join Community"; submitBtn.style.opacity = "1";
        
        form.style.display = "none"; 
        whatsappLinks.style.display = "block";
        
      }catch(err){
        showToast("Registration failed: " + err.message, "error");
        submitBtn.textContent = "Join Community"; submitBtn.style.opacity = "1";
      }
    });

    adminLoginBtn.addEventListener("click", async ()=>{
      const email = adminEmail.value.trim(), pw = adminPassword.value.trim();
      if(!email || !pw){ showToast("Enter email and password", "error"); return; }
      try{
        adminLoginBtn.textContent = "Authenticating...";
        await signInWithEmailAndPassword(auth,email,pw);
        adminLoginBtn.textContent = "Login securely";
        showToast("Logged in successfully", "success");
      }catch(err){
        showToast("Login failed.", "error");
        adminLoginBtn.textContent = "Login securely";
      }
    });

    logoutBtn.addEventListener("click", async ()=>{ await signOut(auth); showToast("Logged out", "success"); });

    onAuthStateChanged(auth, async (user)=>{
      if(user){
        const uSnap = await get(child(ref(db),`users/${user.uid}`));
        if(uSnap.exists() && uSnap.val().role==="admin"){
          isAdmin = true;
          adminPanel.style.display="block"; adminLoginSection.style.display="none";
          adminMsg.textContent=`Active Admin: ${user.email}`;
          updateVisibility();
        }else{
          isAdmin = false; adminPanel.style.display="none"; adminLoginSection.style.display="block";
          await signOut(auth); updateVisibility();
        }
      }else{
        isAdmin = false; adminPanel.style.display="none"; adminLoginSection.style.display="block";
        updateVisibility();
      }
    });

    setTargetBtn.addEventListener("click", async ()=>{
      const v = Number(targetInput.value);
      if(!v || v<=0){ showToast("Enter a valid number", "error"); return; }
      try{ await set(targetRef,v); showToast(`Target updated to ${v}`, "success"); targetInput.value = ""; }
      catch(err){ showToast("Failed to update", "error"); }
    });

    resetBtn.addEventListener("click", async ()=>{
      if(!confirm("⚠️ Are you sure you want to delete ALL registrations?")) return;
      try{ 
        await remove(registrationsRef); 
        whatsappLinks.style.display="none"; form.style.display = "flex";
        showToast("Database cleared", "success");
      }catch(err){ showToast("Failed to clear data", "error"); }
    });

    if(adminTableBody) {
      adminTableBody.addEventListener("click", async (e) => {
        if(e.target.classList.contains("delete-row-btn")) {
          const id = e.target.getAttribute("data-id");
          if(confirm("Remove this specific user?")) {
            try { await remove(ref(db, `registrations/${id}`)); showToast("User removed", "success"); } 
            catch(err) { showToast("Failed to delete", "error"); }
          }
        }
        
        if(e.target.classList.contains("verify-row-btn")) {
          const id = e.target.getAttribute("data-id");
          if(confirm("Mark this bot developer as officially verified?")) {
            try { 
                await set(ref(db, `registrations/${id}/status`), "verified"); 
                showToast("Bot verified successfully!", "success"); 
            } 
            catch(err) { showToast("Failed to verify", "error"); }
          }
        }
      });
    }

    if(adminSearch) {
      adminSearch.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const rows = adminTableBody.querySelectorAll(".admin-data-row");
        rows.forEach(row => { row.style.display = row.textContent.toLowerCase().includes(term) ? "" : "none"; });
      });
    }

    async function downloadVCF(typeToDownload) {
      try{
        const snap = await get(registrationsRef);
        if(!snap.exists()){ showToast("No registrations found.", "error"); return; }
        const data = snap.val();
        const lines=[];
        for(const id of Object.keys(data)){
          const r = data[id];
          if((r.status || 'verified') !== 'verified') continue;
          if((r.type || 'normal') !== typeToDownload) continue;

          const prefix = typeToDownload === 'bot' ? "BOT - " : "RUMMI - ";
          lines.push("BEGIN:VCARD", "VERSION:3.0", `FN:${prefix}${escapeV(r.fn||"No Name")}`);
          if(r.tel) lines.push(`TEL:${escapeV(r.tel)}`);
          lines.push("END:VCARD");
        }
        if (lines.length === 0) { showToast("No verified users in this category yet.", "error"); return; }
        const vcf = lines.join("\r\n")+"\r\n";
        const now = new Date().toISOString().slice(0,10);
        const filename = typeToDownload === 'bot' ? `Rummi_Bots_${now}.vcf` : `Rummi_Contacts_${now}.vcf`;
        
        const blob=new Blob([vcf],{type:"text/vcard;charset=utf-8"});
        const url=URL.createObjectURL(blob);
        const a=document.createElement("a"); a.href=url; a.download=filename; 
        document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
        showToast("Downloading VCF...", "success");
      }catch(err){ showToast("Failed to build file", "error"); }
    }

    downloadNormalBtn.addEventListener("click", () => downloadVCF('normal'));
    downloadBotBtn.addEventListener("click", () => downloadVCF('bot'));

    if(csvBtn) {
      csvBtn.addEventListener("click", async ()=>{
        try {
          const snap = await get(registrationsRef);
          if(!snap.exists()){ showToast("No data to export", "error"); return; }
          let csv = "Name,Phone,Type,Status,Date\n";
          const data = snap.val();
          for(const id in data){ 
            const r = data[id]; 
            csv += `"${r.fn}","${r.tel}","${r.type||'normal'}","${r.status||'verified'}","${r.timestamp}"\n`; 
          }
          const blob = new Blob([csv], {type: "text/csv"});
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a"); a.href = url; a.download = `Rummi_Data_${new Date().toISOString().slice(0,10)}.csv`;
          a.click();
        }catch(err){ showToast("Export failed", "error"); }
      });
    }

    // NEW: Real-time Listener to separate tracker logic
    onValue(registrationsRef, (snap)=>{
      verifiedNormal = 0;
      verifiedBot = 0;
      if(adminTableBody) adminTableBody.innerHTML = ""; 

      if(snap.exists()){
        const data = snap.val();
        for(const key in data){
          const r = data[key];
          const type = r.type || 'normal';
          const status = r.status || 'verified';
          
          if(status === 'verified') {
              if(type === 'normal') verifiedNormal++;
              if(type === 'bot') verifiedBot++;
          }

          if(adminTableBody) {
            let badgeHTML = "";
            let verifyButtonHTML = "";

            if(type === 'normal') {
                badgeHTML = '<span class="badge normal">Normal</span>';
            } else if(type === 'bot' && status === 'pending') {
                badgeHTML = '<span class="badge pending">Pending Bot</span>';
                verifyButtonHTML = `<button class="verify-row-btn" data-id="${key}" style="background: transparent; border: none; color: var(--success); font-size: 16px; cursor: pointer; margin-right: 8px;" title="Verify Bot">✅</button>`;
            } else if(type === 'bot' && status === 'verified') {
                badgeHTML = '<span class="badge bot">Verified Bot</span>';
            }

            const tr = document.createElement("tr"); tr.className = "admin-data-row";
            tr.innerHTML = `
              <td class="row-name">${r.fn || 'N/A'} ${badgeHTML}</td>
              <td class="row-phone">${r.tel || 'N/A'}</td>
              <td style="text-align:right;">
                ${verifyButtonHTML}
                <button class="delete-row-btn" data-id="${key}" title="Delete User">❌</button>
              </td>
            `;
            adminTableBody.appendChild(tr);
          }
        }
        if(adminSearch && adminSearch.value) adminSearch.dispatchEvent(new Event('input'));
      } else {
        if(adminTableBody) adminTableBody.innerHTML = `<tr><td colspan="3" style="text-align:center; color:gray;">No registrations yet</td></tr>`;
      }

      if(normalCountEl) normalCountEl.textContent = verifiedNormal;
      if(botCountEl) botCountEl.textContent = verifiedBot;

      const normalPct = targetCount > 0 ? Math.min(Math.round((verifiedNormal/targetCount)*100),100) : 0;
      const botPct = targetCount > 0 ? Math.min(Math.round((verifiedBot/targetCount)*100),100) : 0;

      if(normalProgressFill) normalProgressFill.style.width = normalPct + "%";
      if(botProgressFill) botProgressFill.style.width = botPct + "%";
      
      updateVisibility();
    });

  </script>
</body>
</html>
