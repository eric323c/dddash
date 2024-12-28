let projects = [];

// Add a new project
function addProject() {
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDesc").value;
    const dueDate = document.getElementById("projectDueDate").value;

    if (title && description && dueDate) {
        projects.push({ title, description, dueDate, status: "to-do", tasks: [] });
        renderKanban();
        closeModal("addProjectModal");
    }
}

// Render projects on the Kanban board
function renderKanban() {
    const kanban = document.getElementById("projectKanban");
    kanban.innerHTML = `
        <div class="kanban-column" data-status="to-do"><h3>To Do</h3></div>
        <div class="kanban-column" data-status="in-progress"><h3>In Progress</h3></div>
        <div class="kanban-column" data-status="completed"><h3>Completed</h3></div>
    `;

    projects.forEach((project) => {
        const column = kanban.querySelector(`.kanban-column[data-status="${project.status}"]`);
        const item = document.createElement("div");
        item.className = "kanban-item";
        item.draggable = true;
        item.innerHTML = `
            <strong>${project.title}</strong>
            <p>${project.description}</p>
            <small>Due: ${project.dueDate}</small>
            <div class="progress-bar">
                <div style="width: ${calculateProgress(project)}%;"></div>
            </div>
        `;
        item.addEventListener("dragstart", () => handleDragStart(project));
        column.appendChild(item);
    });
}

// Drag-and-drop functionality
let draggedProject = null;

function handleDragStart(project) {
    draggedProject = project;
}

function handleDrop(status) {
    if (draggedProject) {
        draggedProject.status = status;
        renderKanban();
        draggedProject = null;
    }
}

// Calculate project progress
function calculateProgress(project) {
    const totalTasks = project.tasks.length || 1;
    const completedTasks = project.tasks.filter((task) => task.completed).length;
    return Math.round((completedTasks / totalTasks) * 100);
}

// Initialize Kanban board
window.onload = function () {
    renderKanban();
};
