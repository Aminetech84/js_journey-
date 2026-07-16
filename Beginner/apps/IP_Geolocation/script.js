async function fetchIP() {
  const el = document.getElementById("ip-result");
  el.textContent = "Fetching...";
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    el.style.color = "";
    el.innerHTML = `
    <span style="color: var(--accent);">IP: </span><span>${data.ip}</span><br>
    <span style="color: var(--accent);">City: </span><span> ${data.city || "—"}</span><br>
    <span style="color: var(--accent);">Country: </span><span> ${data.country_name || "—"}</span><br>
    <span style="color: var(--accent);">ISP: </span><span>${data.org || "—"}</span>
    `;
  } catch (e) {
    el.textContent = "Error: " + e.message;
    el.style.color = "var(--accent2)";
  }
}
