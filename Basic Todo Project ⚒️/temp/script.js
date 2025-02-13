document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add task when clicking the button
addTaskBtn.addEventListener("click", addTask);

// Add task when pressing Enter
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a task
function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    // Mark task as completed when clicked
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
        saveTasks();
    });

    // Delete task when clicking the delete button
    li.querySelector(".delete-btn").addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents triggering the li click event
        li.remove();
        saveTasks();
    });

    taskList.appendChild(li);
    taskInput.value = ""; // Clear input field
    saveTasks(); // Save tasks in local storage
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push({
            text: li.querySelector("span").textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", json.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">X</button>
        `;

        if (task.completed) {
            li.classList.add("completed");
        }

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
            saveTasks();
        });

        li.querySelector(".delete-btn").addEventListener("click", function(event) {
            event.stopPropagation();
            li.remove();
            saveTasks();
        });

        taskList.appendChild(li);
    });
}
