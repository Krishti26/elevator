const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");

  // Task text span
  const span = document.createElement("span");
  span.textContent = taskText;
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
