/** Taskbar Functionality */
function toggleSidebar() {
    const taskbar = document.getElementById("taskbarDocked");
    taskbar.classList.toggle("collapsed");
}

// Undock and dock the taskbar
let taskbarWindow = null;

function toggleTaskbar() {
    const taskbar = document.getElementById("taskbarDocked");
    const dockToggle = document.getElementById("dockToggle");

    if (taskbar.classList.contains("hidden")) {
        // Dock the taskbar
        taskbar.classList.remove("hidden");
        dockToggle.innerText = "Undock Taskbar";
        if (taskbarWindow) taskbarWindow.close();
    } else {
        // Undock the taskbar
        taskbar.classList.add("hidden");
        dockToggle.innerText = "Dock Taskbar";
        taskbarWindow = window.open(
            "taskbar.html",
            "Taskbar",
            "width=250,height=600,left=100,top=100,resizable=no"
        );
        taskbarWindow.onbeforeunload = () => {
            // Automatically dock the taskbar when the window closes
            taskbar.classList.remove("hidden");
            dockToggle.innerText = "Undock Taskbar";
        };
    }
}

/** Tabs Functionality */
function switchTab(tabId) {
    const tabs = document.querySelectorAll(".tabContent");
    tabs.forEach((tab) => tab.classList.add("hidden"));
    document.getElementById(`${tabId}Tab`).classList.remove("hidden");
}

/** Modals Functionality */
function showModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

/** Collaboration Notes */
function saveCollabNotes() {
    const notes = document.getElementById("collabNotes").value;
    localStorage.setItem("collabNotes", notes);
}

function loadCollabNotes() {
    const notes = localStorage.getItem("collabNotes") || "";
    document.getElementById("collabNotes").value = notes;
}

/** Page Initialization */
window.onload = function () {
    loadCollabNotes();
};
