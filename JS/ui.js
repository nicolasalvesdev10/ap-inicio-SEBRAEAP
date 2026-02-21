// Apenas a definição da função
function renderizarSistemas(lista, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = lista.map(item => `
        <div class="image-item">
            <a href="${item.link}" target="_blank">
                <img src="assets/${item.img}" alt="${item.nome}">
            </a>
        </div>
    `).join('');
}