let index = 0;
const wrapper = document.getElementById('slide-wrapper');
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.nav-btn');

function moveSlide() {
    if (!wrapper) return;
    const isMobile = window.innerWidth <= 1024;
    const slideWidth = isMobile ? 90 : 70;
    const marginWidth = isMobile ? 5 : 2.5;
    const totalSlideSpace = slideWidth + (marginWidth * 2);

    const initialCenter = (100 / 2) - (totalSlideSpace / 2);
    const finalOffset = initialCenter - (index * totalSlideSpace);

    wrapper.style.transform = `translateX(${finalOffset}vw)`;

    slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
    navButtons.forEach((btn, i) => btn.classList.toggle('active-nav', i === index));
    
    // Atualiza setas
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = index === 0 ? "0.3" : "1";
        prevBtn.style.pointerEvents = index === 0 ? "none" : "auto";
        nextBtn.style.opacity = index === slides.length - 1 ? "0.3" : "1";
        nextBtn.style.pointerEvents = index === slides.length - 1 ? "none" : "auto";
    }
}

// Funções de controle
function nextSlide() { if (index < slides.length - 1) { index++; moveSlide(); } }
function prevSlide() { if (index > 0) { index--; moveSlide(); } }
function goToSlide(targetIndex) { index = targetIndex; moveSlide(); }