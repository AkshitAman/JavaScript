document.addEventListener("DOMContentLoaded", () => {
  const TodoInput = document.getElementById("todo-input");
  const AddTaskButton = document.getElementById("add-task-butn");
  const TodoList = document.getElementById("todo-list");

  let Tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  Tasks.forEach(task => renderTask(task));

  AddTaskButton.addEventListener("click", () => {
    const input = TodoInput.value.trim();
    if (input === "") return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    Tasks.push(newTask);
    saveTasks();
    TodoInput.value = ""; // for clearing input
    console.log("Tasks");
  });

  function renderTask(task) {
    console.log(task);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }
});
