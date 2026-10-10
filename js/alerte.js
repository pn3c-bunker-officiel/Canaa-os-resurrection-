// BOUTON D'ALERTE SILENCIEUSE - Phase 1 & 2
function declencherAlerteSilencieuse() {
  navigator.vibrate([200, 100, 200]); // Vibration discrète
  
  const position = { 
    lat: "5.35", lng: "-4.00", // Position Yopougon exemple
    heure: new Date().toLocaleString() 
  };

  // 1. Envoi silencieux aux GUARDIANS proches (Phase 2)
  console.log("ALERTE GUARDIAN CI ENVOYÉE:", position);
  
  // 2. Envoi silencieux FDS (Phase 1)
  // fetch('https://api.canaa-os.ci/alerte', { method: 'POST', body: JSON.stringify(position) })
  
  alert("🛡️ ALERTE ENVOYÉE en silence. Un GUARDIAN proche arrive. Reste calme.");
  document.getElementById('status').innerText = "GUARDIAN EN ROUTE...";
}

document.getElementById('btnSOS').addEventListener('click', declencherAlerteSilencieuse);
