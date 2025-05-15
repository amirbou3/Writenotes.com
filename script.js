const textarea = document.getElementById("noteArea");
const fileInput = document.getElementById("fileInput");

function saveNote() {
  localStorage.setItem("blocNotes", textarea.value);
  alert("Note saved!");
}

function clearNote() {
  textarea.value = "";
  localStorage.removeItem("blocNotes");
}

function downloadNote() {
  const blob = new Blob([textarea.value], { type: 'text/plain' });
  const link = document.createElement("a");
  link.download = "bloc-note.txt";
  link.href = URL.createObjectURL(blob);
  link.click();
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("blocNotes");
  if (saved) {
    textarea.value = saved;
    autoResize();
  }
});

textarea.addEventListener("input", () => {
  localStorage.setItem("blocNotes", textarea.value);
  autoResize();
});

function autoResize() {
  if (window.innerWidth <= 768) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
}

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      textarea.value = reader.result;
      localStorage.setItem("blocNotes", textarea.value);
      autoResize();
    };
    reader.readAsText(file);
  }
});
