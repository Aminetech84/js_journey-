function testRegex() {
  const pattern = document.getElementById("regex-pattern").value;
  const text = document.getElementById("regex-input").value;
  const out = document.getElementById("regex-highlight");
  const count = document.getElementById("regex-count");

  if (!pattern || !text) {
    out.textContent = text || "Matches will highlight here";
    count.textContent = "";
    return;
  }
  try {
    const re = new RegExp(pattern, "g");
    const matches = [...text.matchAll(re)];
    count.textContent = `${matches.length} match${matches.length !== 1 ? "es" : ""} found`;
    out.innerHTML = text.replace(re, (m) => `<mark>${m}</mark>`);
  } catch (e) {
    out.textContent = "Invalid regex";
    count.textContent = "";
  }
}
