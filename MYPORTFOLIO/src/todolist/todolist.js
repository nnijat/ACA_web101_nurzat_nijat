//Select related elements and assign them to vars
var newTask = document.querySelector("#new-task"); //input box
var addTaskBtn = document.querySelector("#addTask"); //Add Task btn
var toDoUl = document.querySelector(".todo-list ul"); //Todolist list

//Creat task list
var createNewTask = function(task) {
  //Set up new list item
  var listItem = document.createElement("li"); // Creates --> <li>
  var checkBox = document.createElement("input"); // Creates --> checkbox
  var label = document.createElement("label"); // Creates --> <label>

  //Get input text and set new label
  label.innerText = task;

  //Add new checkbox
  checkBox.type = "checkbox";

  //create new li list
  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  //clear input box
  newTask.value = "";

  //return new generated list
  return listItem;
};

//Add the task to checklist box
var addTask = function() {
  //Create a list of new added item
  var listItem = createNewTask(newTask.value);
  //Add the new item to exsiting list
  toDoUl.appendChild(listItem);

  //Caling helper method todoListCombination
  todoListCombination(listItem, removeTask);
};

//Remove checklist item function
var removeTask = function() {
  //Store checkbox parent element in a var
  var listItem = this.parentNode;
  //remove item from list
  toDoUl.removeChild(listItem);
};

//Combie Todo list function
var todoListCombination = function(taskItem, checkBoxClick) {
  //all checkbox in a var
  var checkBox = taskItem.querySelector("input[type=checkbox]");

  //setup event listener for checkbox
  checkBox.onchange = checkBoxClick;
};

//Call addTask function
addTaskBtn.addEventListener("click", addTask);
