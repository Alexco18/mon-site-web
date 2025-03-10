// scripts.js

let currentIndex = 0;

function showNextItem() {
    const carrouselContainer = document.querySelector('.carrousel-container');
    const items = document.querySelectorAll('.carrousel-item');
    currentIndex = (currentIndex + 1) % items.length;
    carrouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextItem, 5000); // Défilement toutes les 5 secondes
