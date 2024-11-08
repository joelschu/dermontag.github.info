//ENLARGING IMAGES
const images = ["../links/page1.png", "../links/page2-3.png", "../links/page4-5.png", "../links/page6-7.png", "../links/page8-9.png", "../links/page10-11.png", "../links/page12-13.png", "../links/page14-15.png", "../links/page16.png"];
let currentImageIndex = 0;

const newspaperImage = document.getElementById("newspaperImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const enlargedView = document.getElementById("enlargedView");
const enlargedImage = document.getElementById("enlargedImage");
const closeButton = document.getElementById("closeButton");

function updateImage() {
    newspaperImage.src = images[currentImageIndex];
}

function showEnlargedView() {
    enlargedImage.src = images[currentImageIndex];
    enlargedView.style.display = "block";
}

function hideEnlargedView() {
    enlargedView.style.display = "none";
}

// Function to close enlarged image on "Escape" key press
function closeEnlargedImageOnEscape(event) {
    if (event.key === 'Escape') {
        hideEnlargedView();
    }
}

function handleSwipe() {
    const minSwipeDistance = 50; // Adjust this value to control the sensitivity of the swipe

    if (touchEndX < touchStartX - minSwipeDistance) {
        // Swipe right, go to the next image
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    } else if (touchEndX > touchStartX + minSwipeDistance) {
        // Swipe left, go to the previous image
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }
}

// Add touch event listeners to the newspaperImage element
newspaperImage.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
});

newspaperImage.addEventListener("touchend", (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

// Add event listener to close enlarged image on "Escape" key press
window.addEventListener('keydown', closeEnlargedImageOnEscape);

newspaperImage.addEventListener("click", showEnlargedView);
closeButton.addEventListener("click", hideEnlargedView);

prevButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextButton.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

updateImage(); // Initial update


//HAMBURGER
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu_nav"); 
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle("close");
    menu.classList.toggle("show");
    menuNav.classList.toggle("show");
    navItems.forEach((item) => item.classList.toggle("show"));

    // No need to reset the menu state here
}


//TICKER
const ticker = document.querySelector('.ticker');
const tickerLink = document.querySelector('.ticker-link');

// Pause the ticker when hovering over the link
tickerLink.addEventListener('mouseover', () => {
    ticker.classList.add('paused');
});

// Resume the ticker when mouse leaves the link
tickerLink.addEventListener('mouseout', () => {
    ticker.classList.remove('paused');
});