const wrapper = document.getElementById('slide-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function moveSlide() {
    wrapper.style.transform = `translateX(-${index * 100}vw)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    prevBtn.style.opacity = index === 0 ? "0.3" : "1";
    prevBtn.style.cursor = index === 0 ? "not-allowed" : "pointer";

    nextBtn.style.opacity = index === slides.length - 1 ? "0.3" : "1";
    nextBtn.style.cursor = index === slides.length - 1 ? "not-allowed" : "pointer";
}

nextBtn.addEventListener('click', () => {
    if (index < slides.length - 1) {
        index++;
        moveSlide();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        moveSlide();
    }
});