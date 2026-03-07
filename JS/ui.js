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

function updateCalendar() {
    const dateElement = document.getElementById('date-text');
    const hourElement = document.getElementById('hour');
    if (!dateElement || !hourElement) return;

    const agora = new Date();
    dateElement.innerText = agora.toLocaleDateString('pt-BR');
    
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    hourElement.innerText = `${horas}:${minutos}`;
}

setInterval(updateCalendar  , 1000);

function atualizarSaudacao() {
    const hora = new Date().getHours();
    const textoElemento = document.getElementById('saudacao-texto');
    const iconeElemento = document.getElementById('welcome-icon');
    
    if(!textoElemento || !iconeElemento) return;

    let saudacao, icone;

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia";
        icone = '<i class="fa-solid fa-sun" style="color: #FFCC00;"></i>';
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde";
        icone = '<i class="fa-solid fa-cloud-sun" style="color: #FF8C00;"></i>';
    } else {
        saudacao = "Boa noite";
        icone = '<i class="fa-solid fa-moon" style="color: #C0C0C0;"></i>';
    }

    iconeElemento.innerHTML = icone;
    textoElemento.innerText = saudacao;
}