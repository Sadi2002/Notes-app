const addNoteBtn = document.querySelector(".add-note");
const overlay = document.querySelector(".overlay");
const noteModal = document.querySelector(".note-modal");
const noteConfirm = document.querySelector(".add");
const closeModal = document.querySelector(".close");
const inputTitle = document.querySelector(".note-up-input");
const inputDescription = document.querySelector(".note-down-desc");
const noteContainer = document.querySelector(".create-note");

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

const updateAddButtonAvailability = function () {
  const isTitleEmpty = inputTitle.value.trim() === "";
  const isDescriptionEmpty = inputDescription.value.trim() === "";
  noteConfirm.disabled = isTitleEmpty || isDescriptionEmpty;
};

const createNote = function () {
  const r = Math.floor(Math.random() * 70);
  const g = Math.floor(Math.random() * 150);
  const b = Math.floor(Math.random() * 150);

  const title = inputTitle.value;
  const description = inputDescription.value;

  addNewNote();

  const html = ` <div class="note" style="background-color: rgb(${r}, ${g}, ${b})">
  <i class="fas fa-times"></i>
  <h3 class="note-title">${title}</h3>
  <p class="note-description">
    ${description}
  </p>
</div>`;

  if (!noteConfirm.disabled) {
    noteContainer.insertAdjacentHTML("beforeend", html);
    inputTitle.value = "";
    inputDescription.value = "";
  }

  const deleteNoteBtn = document.querySelector(".fa-times");
  deleteNoteBtn.addEventListener("click", deleteNote);
};

const deleteNote = function (e) {
  e.target.closest(".note").remove();
};

inputTitle.addEventListener("input", updateAddButtonAvailability);
inputDescription.addEventListener("input", updateAddButtonAvailability);

addNoteBtn.addEventListener("click", addNewNote);
noteConfirm.addEventListener("click", createNote);
closeModal.addEventListener("click", addNewNote);

updateAddButtonAvailability();
