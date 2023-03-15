const addTask = document.getElementById("submittask");
const newTaskDescription = document.getElementById("newtasktext");
const taskList = document.getElementById("tasklist");
let allTasks = document.querySelectorAll(".task");

addRemoveFunctionality();

addTask.addEventListener("click", addNewTask);

function addNewTask() {
  let taskText = newTaskDescription.value;

  if (taskText == "") {
    alert("Please make sure that the task you wish to enter is not blank");
    return;
  }

  newTaskDescription.value = "";

  const newTask = document.createElement("div");
  let taskDescription = document.createElement("p");
  const button = document.createElement("a");

  newTask.className = "task";
  taskDescription.textContent = taskText;
  button.className = "removetask";
  button.textContent = "X";

  newTask.appendChild(taskDescription);
  newTask.appendChild(button);

  taskList.appendChild(newTask);

  addRemoveFunctionality();
}

function removeTask(e) {
  let task = e.target.parentNode;
  console.log(task);
  taskList.removeChild(task);
}

function addRemoveFunctionality() {
  let allTaskRemovals = document.querySelectorAll(".removetask");
  for (let i = 0; i < allTaskRemovals.length; i++) {
    allTaskRemovals[i].addEventListener("click", removeTask);
  }
}
