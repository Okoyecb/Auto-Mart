// Get the modal
const modal = document.getElementById('myModal');

btn = () => {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeDel = () => {
  modal.style.display = 'none';
};


// EDIT MODAL 1

// Get the modal
const edit = document.getElementById('editModal');

// Get the <span> element that closes the modal
const spanclosure = document.getElementsByClassName('closee')[0];

// When the user clicks the button, open the modal
fire = () => {
  edit.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
closeModal = (edit) => {
  const modal = document.getElementById(edit);
  modal.style.display = 'none';
};


// EDIT MODAL 2

// Get the modal
const trigger = document.getElementById('poModal');

pull = () => {
  trigger.style.display = 'block';
};


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == edit) {
    edit.style.display = 'none';
  }
  if (event.target == modal) {
    modal.style.display = 'none';
  }
  if (event.target == trigger) {
    trigger.style.display = 'none';
  }
};
