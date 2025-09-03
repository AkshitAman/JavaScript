document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList=document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });


