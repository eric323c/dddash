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
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    }
}

