const fs = require("fs"); // file System Module , uded to read and write files
const filePath = "./tasks.json"; // here tasks are being stored.
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);  // reads the binary data from the file... 
    const dataJSON = dataBuffer.toString(); // converts binary to string...
    return JSON.parse(dataJSON); // converts string into array..
  } catch (error) {
    return [];
  }
};

const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks); //converts array into string..
  fs.writeFileSync(filePath, dataJSON); // writes the string into the file..
};

const addTask = (task) => {
  const tasks = loadTasks();
  tasks.push({ task });
  saveTasks(tasks);
  console.log("Task added", task);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "list") {
  listTasks();
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("Command not found !");
}
