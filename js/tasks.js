let tasks = [];

// Add a new task
function addTask() {
    const taskName = document.getElementById("taskName").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const recurrence = document.getElementById("taskRecurrence").value;

    if (taskName && taskPriority) {
        tasks.push({ name: taskName, priority: taskPriority, completed: false, recurrence });
        renderTasks();
        closeModal("addTaskModal");
    }
}

// Render tasks in the task list
function renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks
        .map(
            (task, index) => `
        <li class="${task.completed ? "completed" : ""}">
            ${task.name} - <strong>${task.priority}</strong>
            ${task.recurrence ? `<small>(Recurring: ${task.recurrence})</small>` : ""}
            <button onclick="toggleTask(${index})">Toggle</button>
        </li>
    `
        )
        .join("");
}

// Toggle task completion
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}
