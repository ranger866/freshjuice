// Select necessary elements
const track = document.querySelector('.varian-img .content-items');
const slides = Array.from(track.children);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const varianName = document.getElementById('varian-name');

const varianNames = ['Orange Juice', 'Apple Juice', 'Mango Juice']

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    varianName.textContent = varianNames[currentIndex]
}


// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;  // Loop back to the first slide
    updateCarousel();
});

// Event listener for the "Prev" button
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;  // Loop to the last slide
    updateCarousel();
});

// Update the carousel position on window resize to ensure it adapts to the new screen size
window.addEventListener('resize', updateCarousel);


const hamButton = document.querySelector('.ham-button');
const sidebar = document.querySelector('.sidebar');

hamButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
