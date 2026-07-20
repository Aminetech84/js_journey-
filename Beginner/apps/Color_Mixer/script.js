function toHex(v) {
  return Number(v).toString(16).padStart(2, "0");
}

function updateColor() {
  const r = document.getElementById("r-slider").value;
  const g = document.getElementById("g-slider").value;
  const b = document.getElementById("b-slider").value;
  document.getElementById("r-val").textContent = r;
  document.getElementById("g-val").textContent = g;
  document.getElementById("b-val").textContent = b;
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  document.getElementById("color-preview").style.background = hex;
  document.getElementById("color-hex").textContent = hex.toUpperCase();
}

function copyHex() {
  const hex = document.getElementById("color-hex").textContent;
  navigator.clipboard.writeText(hex);
  const btn = event.target;
  btn.textContent = "Copied!";
  setTimeout(() => (btn.textContent = "copy HEX"), 1200);
}

updateColor();
