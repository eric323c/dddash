let projects = [];

// Add a new project
function addProject() {
    const title = document.getElementById("projectTitle").value;
    const description = document.getElementById("projectDesc").value;

    if (title && description) {
        projects.push({ title, description, status: "to-do" });
        renderKanban();
        closeModal("addProjectModal");
    }
}

// Render projects on the Kanban board
function renderKanban() {
    const kanban = document.getElementById("projectKanban");
    kanban.innerHTML = `
        <div class="kanban-column"><h3>To Do</h3></div>
        <div class="kanban-column"><h3>In Progress</h3></div>
        <div class="kanban-column"><h3>Completed</h3></div>
    `;

    projects.forEach((project) => {
        const columnIndex =
            project.status === "to-do"
                ? 0
                : project.status === "in-progress"
                ? 1
                : 2;

        const column = kanban.children[columnIndex];
        const item = document.createElement("div");
        item.className = "kanban-item";
        item.innerHTML = `<strong>${project.title}</strong><br>${project.description}`;
        item.onclick = () => changeProjectStatus(project);
        column.appendChild(item);
    });
}

// Change project status (cycle between To Do, In Progress, Completed)
function changeProjectStatus(project) {
    if (project.status === "to-do") {
        project.status = "in-progress";
    } else if (project.status === "in-progress") {
        project.status = "completed";
    } else {
        project.status = "to-do";
    }
    renderKanban();
}

// Sort projects by deadline (placeholder functionality)
function sortProjects() {
    alert("Sorting by deadline is not implemented yet.");
}

// Initialize Kanban board
window.onload = function () {
    renderKanban();
};

