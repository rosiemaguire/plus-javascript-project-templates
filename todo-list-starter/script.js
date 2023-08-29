const toDoList = ["Update resume", "Binge junk food", "have a nap"];
const toDoTaskStatus = [false,true,false]

updateTodoList();

function addTask() {
  
  // Get the item value 
  const newToDo = document.getElementById("new-task-text");

  if (newToDo.value) {
    //  Push this item to my toDoList
    toDoList.push(newToDo.value);
    // Push incomplete status to toDoTaskStatus
    toDoTaskStatus.push(false);
    // clear my input field
    newToDo.value = "";
    // Update to do list
    updateTodoList();
  }
}

function updateTodoList() {
  const toDoListElement = document.getElementById("todo-list");
  toDoListElement.innerHTML = "";
  for (const [index, task] of toDoList.entries()) {
    const newTodoTaskElement = createNewTodoItemElement(task, index);
    toDoListElement.appendChild(newTodoTaskElement);
  }
}

function createNewTodoItemElement(task, index) {
  const newToDoTaskTextElement = document.createElement("p");
  newToDoTaskTextElement.innerText = task;

  const newTodoTaskElement = document.createElement("li");
  newTodoTaskElement.appendChild(newToDoTaskTextElement);

  const completeButtonElement = document.createElement("input");
  completeButtonElement.type = "button";
  completeButtonElement.value = "Complete";
  completeButtonElement.onclick = function () {
    toggleComplete(index);
  };
  const addDueDateButtonElement = document.createElement("input");
  addDueDateButtonElement.type = "button";
  addDueDateButtonElement.value = "Add due date";
  addDueDateButtonElement.onclick = function () {
    dueDate(addDueDateButtonElement);
  };

  if(toDoTaskStatus[index]) {
    newToDoTaskTextElement.classList.add("complete");
    completeButtonElement.value = "Mark as incomplete";
  }

  newTodoTaskElement.appendChild(completeButtonElement);
  newTodoTaskElement.appendChild(addDueDateButtonElement);
  return newTodoTaskElement;
}

function toggleComplete(index) {
  toDoTaskStatus[index] = !toDoTaskStatus[index];
  updateTodoList();
}

function dueDate(addDueDateButtonElement){
  addDueDateButtonElement.type = "date";
  addDueDateButtonElement.value = (new Date()).toISOString().substring(0 , 10);
  // const removeDueDate = document.createElement("input");
  // removeDueDate.type = "button";
  // removeDueDate.value = "Remove Due Date";
  // removeDueDate.onclick = function() {
  //   addDueDateButtonElement.appendChild(removeDueDate);
  // }
}

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
document.addEventListener("click",function(event){
  console.log(event)
})