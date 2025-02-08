
✅ **To-Do List App** → Use **localStorage** to save tasks.  
## 🎯 **Step 1: Create the Basic HTML Structure**  
We need an input field to enter tasks, a button to add tasks, and a list to display them.

📌 **Create an `index.html` file** and add the following:  

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>
        <div class="input-container">
            <input type="text" id="taskInput" placeholder="Enter a task...">
            <button id="addTaskBtn">Add Task</button>
        </div>
        <ul id="taskList"></ul>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

---

## 🎨 **Step 2: Style the To-Do List with CSS**  
📌 **Create a `style.css` file** and add the following styles:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.container {
    width: 350px;
    padding: 20px;
    background: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h1 {
    text-align: center;
}

.input-container {
    display: flex;
    margin-bottom: 20px;
}

input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 15px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #218838;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #eee;
    margin: 5px 0;
    border-radius: 5px;
}

li.completed {
    text-decoration: line-through;
    color: #777;
}

.delete-btn {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
```

---

## 🛠 **Step 3: Add JavaScript for Functionality**  
📌 **Create a `script.js` file** and add the following:

```javascript
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
    localStorage.setItem("tasks", JSON.stringify(tasks));
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
```

---

## 🎯 **Step 4: Features & Explanation**  
✅ **Add Task** → Click the "Add Task" button or press `Enter`.  
✅ **Mark as Completed** → Click on a task to strike through it.  
✅ **Delete Task** → Click the red **X** button to remove it.  
✅ **Save Tasks in Local Storage** → Tasks persist even after page refresh.  
✅ **Retrieve Tasks from Local Storage** → Loads saved tasks when the page is opened.

---

## 🎥 **Demo of How It Works**
1. Open `index.html` in your browser.  
2. Type a task in the input field and press **Enter** or click **Add Task**.  
3. Click on a task to mark it as **completed** (adds a strike-through).  
4. Click the **X** button to delete a task.  
5. Refresh the page—your tasks are still there! 🎉  

---

## 🚀 **Next Steps & Enhancements**
🔹 **Add Edit Feature** → Double-click a task to edit it.  
🔹 **Filter Tasks** → Show only **Completed/Pending** tasks.  
🔹 **Dark Mode Toggle** → Switch between light/dark themes.  
🔹 **Drag & Drop** → Rearrange tasks using JavaScript.  

Yes! You can create a simple calculator using **vanilla HTML, CSS, and JavaScript** without any external libraries or frameworks.  
