// Photo data
let photos = [
    { src: "https://via.placeholder.com/300", title: "Golden Sunset", desc: "A breathtaking sunset captured on a serene evening.", date: "2025-03-15", location: "Goa, India", category: "nature" },
    { src: "https://via.placeholder.com/300", title: "Urban Lights", desc: "The vibrant energy of the city at night.", date: "2025-02-10", location: "Mumbai, India", category: "urban" },
    { src: "https://via.placeholder.com/300", title: "Timeless Portrait", desc: "A moment of raw emotion frozen in time.", date: "2025-01-20", location: "Delhi, India", category: "portrait" },
    { src: "https://via.placeholder.com/300", title: "Forest Whisper", desc: "Nature’s quiet beauty in the heart of the woods.", date: "2025-03-01", location: "Kerala, India", category: "nature" }
];

// Populate gallery
function populateGallery(category = "all") {
    const galleryGrid = document.getElementById("gallery-grid");
    galleryGrid.innerHTML = "";
    photos
        .filter(photo => category === "all" || photo.category === category)
        .forEach((photo, index) => {
            const item = document.createElement("div");
            item.className = "gallery-item";
            item.style.setProperty("--i", index); // Set custom property for animation delay
            item.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}">
                <p class="caption">${photo.title}</p>
            `;
            item.onclick = () => openLightbox(index);
            galleryGrid.appendChild(item);
        });
}

// Open lightbox
function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    const info = document.getElementById("lightbox-info");

    img.src = photos[index].src;
    info.innerHTML = `
        <h3>${photos[index].title}</h3>
        <p>${photos[index].desc}</p>
        <p><strong>Date:</strong> ${photos[index].date}</p>
        <p><strong>Location:</strong> ${photos[index].location}</p>
    `;
    lightbox.style.display = "flex";
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Filter gallery
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");
        populateGallery(btn.dataset.category);
    });
});

// Add photo from dashboard
document.getElementById("add-photo-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newPhoto = {
        src: document.getElementById("photo-url").value,
        title: document.getElementById("photo-title").value,
        desc: document.getElementById("photo-desc").value,
        date: document.getElementById("photo-date").value,
        location: document.getElementById("photo-location").value,
        category: document.getElementById("photo-category").value
    };
    photos.push(newPhoto);
    populateGallery(document.querySelector(".filter-btn.active").dataset.category);
    e.target.reset();
    alert("Photo added successfully!");
});

// Initial gallery load
populateGallery();