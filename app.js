// To Do

// Grab search input, search button, and the ul list container

const searchInput = document.getElementById("input");
const button = document.getElementById("button");
const ulList = document.querySelector(".to-do-list");

// Validation

// If there's no list items on the page, tell the user to add some

const liItem = document.querySelector(".to-do-item");

if (!liItem) {
  // Create message
  const message = document.createElement("p");
  // Add class
  message.classList.add("message");
  // Add text
  message.innerHTML = "Congrats! No to do items. Why don't you add some?";
  // Add to dom
  ulList.parentNode.appendChild(message);
}

///// Add to do

// 1. On click, grab the value of the term the user puts in

button.addEventListener("click", addToDo);

// 1. b) If user hits enter, run addToDo as well

searchInput.addEventListener("keydown", function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    button.click();
  }
});

// 2. Add the entered value, trash can and completed check mark to the dom

function addToDo() {
  // Grab the value
  const searchValue = searchInput.value;
  // If there's a value in the search input, add it to the dom
  if (searchValue) {
    // Create an li element
    const li = document.createElement("li");
    // Add class to li
    li.classList.add("to-do-item");
    // Add the content of what the user inputted
    li.innerHTML = searchValue;
    // Add to dom
    ulList.appendChild(li);
    // Clear input value
    searchInput.value = "";

    ////// Add the trash can (delete) icon to the dom

    // Create the trash can and check element
    const trashCan = document.createElement("i");
    const checkMark = document.createElement("i");
    // Add classes
    trashCan.classList.add("fa", "fa-trash");
    checkMark.classList.add("fa", "fa-check-circle");
    // Add to dom
    li.appendChild(checkMark);
    li.appendChild(trashCan);

    // Add click event for completing item
    checkMark.addEventListener("click", completeToDo);

    // Add click event for removing item
    trashCan.addEventListener("click", deleteToDo);

    // If there's list items, remove message text
    const message = document.querySelector(".message");
    if (li) {
      message.remove();
    } else {
      // Create message
      const message = document.createElement("p");
      // Add class
      message.classList.add("message");
      // Add text
      message.innerHTML = "Congrats! No to do items. Why don't you add some?";
      // Add to dom
      ulList.parentNode.appendChild(message);
    }
  } else {
    alert("Please enter something to do.");
  }
}

///// Complete to do

function completeToDo() {
  const li = this.parentNode;

  li.classList.add("line-through");
}

// Delete to do

function deleteToDo() {
  const li = this.parentNode;
  li.remove();
}
