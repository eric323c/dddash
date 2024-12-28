let taskbarWindow;

// Open the taskbar pop-up when the workspace is loaded
window.onload = function () {
    openTaskbar();
};

// Reopen the taskbar if the main window loses focus (e.g., minimized)
window.onblur = function () {
    if (!taskbarWindow || taskbarWindow.closed) {
        openTaskbar();
    }
};

// Function to open the taskbar pop-up
function openTaskbar() {
    taskbarWindow = window.open(
        "taskbar.html",
        "Taskbar",
        "width=200,height=600,left=100,top=100,resizable=no"
    );
}
