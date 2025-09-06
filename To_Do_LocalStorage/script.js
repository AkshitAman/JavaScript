document.addEventListener("DOMContentLoaded", () => {  //ensure the DOM is fully loaded before running the script
  const TodoInput = document.getElementById("todo-input");
  const AddTaskButton = document.getElementById("add-task-butn");
  const TodoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];  // Convert the string back to the array

  tasks.forEach((task) => renderTask(task));  

  AddTaskButton.addEventListener("click", () => {
    const taskText = TodoInput.value.trim();   //trim is used to remove spaces for the end and beginning of the string
    if (taskText === "") return;    

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    tasks.push(newTask);   //Add the new task to the array
    saveTasks();        // Save the task to the local storage
    renderTask(newTask);
    TodoInput.value = ""; // clears the input box after adding the task
    console.log(tasks);
  });

  function renderTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;    
      task.completed = !task.completed; 
      li.classList.toggle("completed"); 
      saveTasks();
    });

    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation();  
      tasks = tasks.filter((t) => t.id !== task.id);  //remo
      li.remove(); //
      saveTasks();
    });

    TodoList.appendChild(li);  // Adds the new task to the list
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));  // convert the array to a string and save it to the local storage
  }
});
