const toDoList = ["Update resume", "Binge junk food", "have a nap"];
const toDoStatus = [false,true,false,true]
function addTask() {
  
  // Get the item value 
  const newToDo = document.getElementById("new-task-text");
  //  Push this item to my toDoList
  toDoList.push(newToDo.value);

  // Update to do list
  updateTodoList();

  // clear my input field
  newToDo.value = "";
}

function updateTodoList() {
  const toDoListElement = document.getElementById("todo-list");
  toDoListElement.innerHTML = "";
  for (const [index, toDo] of toDoList.entries()) {
    const newToDoText = document.createElement("p");
    newToDoText.innerHTML = toDo;

    const markCompleteButton = document.createElement("input");
    markCompleteButton.type = "button";
    markCompleteButton.onclick = function() {
      toggleComplete(index);
    };
    markCompleteButton.value = "Complete";

    const newToDo = document.createElement("li");
    newToDo.appendChild(newToDoText);
    newToDo.appendChild(markCompleteButton);
    toDoListElement.appendChild(newToDo);

    if(toDoStatus[index]){
      newToDoText.classList.add("complete");
      markCompleteButton.value = "Mark as incomplete";
      
    }
  }
}

// function createNewTodoItemElement(task, index) {}

function toggleComplete(index) {
  toDoStatus[index] = !toDoStatus[index];
  updateTodoList();
}

updateTodoList();

function keypress(inputId, buttonId) {
  const newItem = document.getElementById(inputId);
  newItem.addEventListener("keypress",function(event) {
    if (event.key == "Enter") {
      // no default currently set, but good practice
      event.preventDefault();
      document.getElementById(buttonId).onclick();
    }
  })
}

keypress("new-task-text","new-task-button");