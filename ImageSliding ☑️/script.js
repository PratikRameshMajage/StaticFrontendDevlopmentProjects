const images = [
    "https://plus.unsplash.com/premium_photo-1707242995183-13d6e81f6de7?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=2070&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1725075088969-73798c9b422c?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop"
];

let currentIndex = 0;
const imgDiv = document.getElementById("img");

// Function to change the background image
function changeImage() {
    imgDiv.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

// Set initial image
changeImage();

// Change image every 3 seconds
setInterval(changeImage, 3000);
