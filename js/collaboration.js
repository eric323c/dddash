// Save collaboration notes
function saveCollabNotes() {
    const notes = document.getElementById("collabNotes").value;
    localStorage.setItem("collabNotes", notes);
}

// Load collaboration notes
function loadCollabNotes() {
    const notes = localStorage.getItem("collabNotes") || "";
    document.getElementById("collabNotes").value = notes;
}

// Initialize collaboration notes
window.onload = function () {
    loadCollabNotes();
};

