const addNoteBtn = document.querySelector(".add-note");
const overlay = document.querySelector(".overlay");
const noteModal = document.querySelector(".note-modal");
const noteConfirm = document.querySelector(".add");

const addNewNote = function () {
  if (
    overlay.classList.contains("hide") &&
    noteModal.classList.contains("hide")
  ) {
    overlay.classList.remove("hide");
    noteModal.classList.remove("hide");
  } else {
    overlay.classList.add("hide");
    noteModal.classList.add("hide");
  }
};

addNoteBtn.addEventListener("click", addNewNote);
noteConfirm.addEventListener("click", addNewNote);
