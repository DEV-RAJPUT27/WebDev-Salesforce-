
window.onload = function () {
  loadTasks();
};

function addTask() {
  var input = document.getElementById("taskInput");
  var taskText = input.value.trim();

  if (taskText !== "") {
    createTaskElement(taskText, false);
    saveToStorage();
    input.value = "";
  }
}

function createTaskElement(text, done) {
  var li = document.createElement("li");
  li.textContent = text;
  if (done) li.classList.add("done");

  li.onclick = function () {
    li.classList.toggle("done");
    saveToStorage();
  };

  var removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";

  removeBtn.onclick = function (event) {
    event.stopPropagation(); 
    li.remove();
    saveToStorage();
  };

  li.appendChild(removeBtn);
  document.getElementById("taskList").appendChild(li);
}

function saveToStorage() {
  var items = document.querySelectorAll("#taskList li");
  var tasks = [];

  for (var i = 0; i < items.length; i++) {
    var text = items[i].childNodes[0].nodeValue.trim();
    var done = items[i].classList.contains("done");
    tasks.push({ text: text, done: done });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  for (var i = 0; i < tasks.length; i++) {
    createTaskElement(tasks[i].text, tasks[i].done);
  }
}
