// VERROUILLAGE FDS - Anti-vol CANAA-OS
function activerModePerdu() {
  localStorage.setItem('canaa_statut', 'PERDU');
  document.body.innerHTML = `
    <div style="background:#111; color:#D4AF37; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:20px;">
      <h1>📱 TÉLÉPHONE VERROUILLÉ</h1>
      <h2>CANAA-OS | GUARDIAN CI</h2>
      <p>Ce téléphone est déclaré perdu.</p>
      <p>Contact propriétaire: +225 ...</p>
      <p>Contact FDS: 111</p>
      <p style="margin-top:30px; font-size:12px;">Toutes tentatives de déverrouillage sont tracées.</p>
    </div>
  `;
    }
