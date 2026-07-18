let swRunning = false,
  swStart = 0,
  swElapsed = 0,
  swInterval = null,
  swLapCount = 0;

function swFormat(ms) {
  const m = String(Math.floor(ms / 60000)).padStart(2, "0");
  const s = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, "0");
  return `${m}:${s}.${cs}`;
}

function swToggle() {
  if (!swRunning) {
    swStart = Date.now() - swElapsed;
    swInterval = setInterval(() => {
      swElapsed = Date.now() - swStart;
      document.getElementById("sw-display").textContent = swFormat(swElapsed);
    }, 16);
    document.getElementById("sw-btn").textContent = "Pause";
    swRunning = true;
  } else {
    clearInterval(swInterval);
    document.getElementById("sw-btn").textContent = "Resume";
    swRunning = false;
  }
}

function swLap() {
  if (!swRunning) return;
  swLapCount++;
  const div = document.createElement("div");
  div.className = "lap";
  div.innerHTML = `<span>Lap ${swLapCount}</span> <span>${swFormat(swElapsed)}</span>`;
  document.getElementById("sw-laps").prepend(div);
}

function swReset() {
  clearInterval(swInterval);
  swRunning = false;
  swElapsed = 0;
  swLapCount = 0;
  document.getElementById("sw-display").textContent = "00:00.00";
  document.getElementById("sw-btn").textContent = "Start";
  document.getElementById("sw-laps").innerHTML = "";
}
