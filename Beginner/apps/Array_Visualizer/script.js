let arr = [];

function renderArr(highlight = []) {
  const el = document.getElementById("arr-display");
  if (arr.length === 0) {
    el.innerHTML = `<span
            style="
              color: var(--muted);
              font-family: var(--mono);
              font-size: 0.8rem;
            "
            >[ empty ]</span
          >`;
    return;
  }
  el.innerHTML = arr
    .map(
      (v, i) =>
        `<div class="arr-item${highlight.includes(i) ? " highlight" : ""}">${v}</div>`,
    )
    .join("");
}

function arrAdd() {
  const v = document.getElementById("arr-input").value;
  if (v === "") return;
  arr.push(Number(v));
  document.getElementById("arr-input").value = "";
  document.getElementById("arr-log").textContent =
    `push(${v}) → length: ${arr.length}`;
  renderArr([arr.length - 1]);
}

function arrPop() {
  if (!arr.length) return;
  const v = arr.pop();
  document.getElementById("arr-log").textContent = `pop() → removed: ${v}`;
  renderArr();
}

function arrMethod(m) {
  if (!arr.length) return;
  let log = "";
  if (m === "sort") {
    arr.sort((a, b) => a - b);
    log = `sort() ascending`;
  }
  if (m === "reverse") {
    arr.reverse();
    log = `reverse()`;
  }
  if (m === "filter-even") {
    arr = arr.filter((x) => x % 2 === 0);
    log = `filter(x => x%2 === 0)`;
  }
  if (m === "map-x2") {
    arr = arr.map((x) => x * 2);
    log = `map(x => x*2)`;
  }
  if (m === "sum") {
    const s = arr.reduce((a, b) => a + b, 0);
    log = `reduce → sum = ${s}`;
    document.getElementById("arr-log").textContent = log;
    renderArr(arr.map((_, i) => i));
    return;
  }
  document.getElementById("arr-log").textContent = log;
  renderArr();
}
