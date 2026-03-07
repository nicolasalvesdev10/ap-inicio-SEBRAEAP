document.addEventListener('DOMContentLoaded', () => {
    // 1. Renderizar Dados
    renderizarSistemas(sistemasSebraeAmapa, 'grid-sebrae-amapa');
    renderizarSistemas(sistemasInteligenciaDados, 'grid-ia-dados');
    renderizarSistemas(sistemasSebraeNacional, 'grid-sebrae-nacional');

    // 2. Iniciar UI
    updateCalendar();
    atualizarSaudacao();
    moveSlide();
    setInterval(() => { updateCalendar(); atualizarSaudacao(); }, 1000 * 60); // Atualiza a cada minuto

    // 3. Eventos de Clique (Setas)
    document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
    document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

    // 4. Teclado e Scroll
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    let isScrolling = false;
    window.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        isScrolling = true;
        e.deltaY > 0 ? nextSlide() : prevSlide();
        setTimeout(() => isScrolling = false, 500);
    }, { passive: true });

    window.addEventListener('resize', moveSlide);

    // 5. Busca
    const searchForm = document.getElementById('search-form');
    searchForm?.addEventListener('submit', (e) => {
        const query = document.getElementById('search-input').value.trim();
        if (!query) return e.preventDefault();
        
        if (query.includes('.') && !query.includes(' ')) {
            e.preventDefault();
            window.open(query.startsWith('http') ? query : `https://${query}`, '_blank');
        }
    });
});