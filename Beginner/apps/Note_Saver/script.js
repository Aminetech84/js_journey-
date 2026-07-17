let notes = JSON.parse(localStorage.getItem("js-playground-notes") || "[]");

function renderNotes() {
  const list = document.getElementById("note-list");
  list.innerHTML =
    notes.length === 0
      ? `<span style="color: var(--muted); font-family: var(--mono); font-size: 0.78rem">No notes yet</span>`
      : notes
          .map(
            (n, i) => `<div class="note-item">
        <span>${n}</span>
        <button onclick="deleteNote(${i})">X</button>
    </div>`,
          )
          .join("");
}

function saveNote() {
  const input = document.getElementById("note-input");
  const val = input.value.trim();
  if (!val) return;
  notes.unshift(val);
  localStorage.setItem("js-playground-notes", JSON.stringify(notes));
  input.value = "";
  renderNotes();
}

function deleteNote(i) {
  notes.splice(i, 1);
  localStorage.setItem("js-playground-notes", JSON.stringify(notes));
  renderNotes();
}

document.getElementById("note-input").addEventListener("keydown", (e) => {
  if (e.key === "Enter") saveNote();
});

renderNotes();
