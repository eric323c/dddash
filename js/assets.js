// Upload and preview design assets
function uploadAsset() {
    const fileInput = document.getElementById("uploadAsset");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const gallery = document.getElementById("assetGallery");
            const img = document.createElement("img");
            img.src = e.target.result;
            img.alt = file.name;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

// Add a new folder
function addFolder(folderName) {
    const folder = document.createElement("div");
    folder.className = "asset-folder";
    folder.innerHTML = `<h3>${folderName}</h3><div class="folder-content"></div>`;
    document.getElementById("assetGallery").appendChild(folder);
}
