

const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['hero-1.mp4', 'hero-2.mp4', 'hero-3.mp4', 'hero-4.mp4'];

let index = 0;
nextButton.addEventListener('click', function() {
    index += 1;
    video.src = movieList[index];

    if (index == 3) {
        index = -1; // This will reset the index to 0 after the last video
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".autoBlur");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.4 }); // Adjust threshold for when the effect starts

    elements.forEach(el => observer.observe(el));
});






