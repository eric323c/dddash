/** Taskbar Functionality */
function toggleSidebar() {
    const taskbar = document.getElementById("taskbarDocked");
    taskbar.classList.toggle("collapsed");
}

// Highlight active tab
function highlightActiveTab(tabName) {
    const links = document.querySelectorAll(".taskbar nav a");
    links.forEach((link) => link.classList.remove("active"));
    const activeLink = document.querySelector(`.taskbar nav a[href="${tabName}.html"]`);
    if (activeLink) {
        activeLink.classList.add("active");
    }
}

// Notification badges
function updateNotificationBadge(tabName, count) {
    const badge = document.querySelector(`.taskbar nav a[href="${tabName}.html"] .notification-badge`);
    if (badge) badge.innerText = count > 0 ? count : "";
}

// Favorites section
function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesContainer = document.getElementById("favoritesContainer");
    favoritesContainer.innerHTML = favorites
        .map((tab) => `<a href="${tab}.html" class="nav-item">${tab}</a>`)
        .join("");
}

function toggleFavorite(tabName) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(tabName)) {
        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites.filter((tab) => tab !== tabName))
        );
    } else {
        favorites.push(tabName);
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
    renderFavorites();
}

/** Modals Functionality */
function showModal(modalId) {
    document.getElementById(modalId).classList.remove("hidden");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add("hidden");
}

/** Page Initialization */
window.onload = function () {
    renderFavorites();
    highlightActiveTab(location.pathname.split("/").pop().split(".")[0]);
};
