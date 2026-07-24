const keyBox = document.getElementById("key-box");
const keyHistory = [];
keyBox.addEventListener("keydown", (e) => {
  e.preventDefault();
  const key = e.key === "" ? "Space" : e.key;
  document.getElementById("key-display").textContent =
    key.length === 1 ? key : `[${key}]`;
  const meta = [
    e.ctrlKey && "Ctrl",
    e.shiftKey && "Shift",
    e.altKey && "Alt",
    e.metaKey && "Meta",
    `code: ${e.code}`,
    `keyCode: ${e.keyCode}`,
  ]
    .filter(Boolean)
    .join(" . ");
  document.getElementById("key-meta").textContent = meta;
  keyHistory.unshift(key.length === 1 ? key : `[${key}]`);
  if (keyHistory.length > 20) keyHistory.pop();
  document.getElementById("key-history").innerHTML = keyHistory
    .map(
      (k) =>
        `<span style="opacity: ${1 - keyHistory.indexOf(k) * 0.05}">${k}</span>`,
    )
    .join(" ");
});
