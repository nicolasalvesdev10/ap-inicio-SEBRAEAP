// Seleção de elementos do DOM
const wrapper = document.getElementById('slide-wrapper');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

// Função que calcula a posição e move o slide
function moveSlide() {
    const isMobile = window.innerWidth <= 1024;
    const slideWidth = isMobile ? 90 : 50;
    const marginWidth = 5;

    const totalSlideSpace = slideWidth + (marginWidth * 2);

    const initialCenter = (100 / 2) - (totalSlideSpace / 2);
    const finalOffset = initialCenter - (index * totalSlideSpace);

    wrapper.style.transform = `translateX(${finalOffset}vw)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    // Atualização visual das setas (Anterior/Próximo)
    prevBtn.style.opacity = index === 0 ? "0.3" : "1";
    prevBtn.style.pointerEvents = index === 0 ? "none" : "auto";
    nextBtn.style.opacity = index === slides.length - 1 ? "0.3" : "1";
    nextBtn.style.pointerEvents = index === slides.length - 1 ? "none" : "auto";
}

// Eventos de clique nos botões
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

// Eventos de teclado (setas)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (index < slides.length - 1) { index++; moveSlide(); }
    } else if (event.key === 'ArrowLeft') {
        if (index > 0) { index--; moveSlide(); }
    }
});

// Eventos de Scroll do Mouse
let isScrolling = false;
window.addEventListener('wheel', (event) => {
    if (isScrolling) return;
    isScrolling = true;

    if (event.deltaY > 0) {
        if (index < slides.length - 1) { index++; moveSlide(); }
    } else if (event.deltaY < 0) {
        if (index > 0) { index--; moveSlide(); }
    }

    setTimeout(() => { isScrolling = false; }, 400);
}, { passive: true });

// Ajuste automático ao redimensionar a tela
window.addEventListener('resize', moveSlide);