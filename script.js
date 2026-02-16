// 1. LISTAS DE DADOS (Organizadas por categoria)
const sistemasSebraeAmapa = [
    { nome: "Sebrae tec", img: "sebraetec.png", link: "#" },
    { nome: "Reserva de salas", img: "reservasalas.png", link: "#" },
    { nome: "AP frotas", img: "frotas.png", link: "#" },
    { nome: "Loja virtual", img: "lojavirtual.png", link: "#" },
    { nome: "Sebrae site", img: "sebraesite.png", link: "#" },
    { nome: "Ramais telefonicos", img: "ramaistelefonicos.png", link: "#" },
    { nome: "Se suite", img: "sesuite.png", link: "#" },
    { nome: "Senha", img: "senha1.png", link: "#" },
    { nome: "Portal do empreendedor", img: "portalempreendedor.png", link: "#" },
    { nome: "Appus hr", img: "appushr.png", link: "#" },
    { nome: "Correio", img: "correio.png", link: "#" },
    { nome: "Alterar senha do usuário", img: "trocarsenha.png", link: "#" }
];

const sistemasInteligenciaDados = [
    { nome: "Qlik sense", img: "qlicksense.png", link: "#" },
    { nome: "Radar sebrae de oportunidades", img: "radarsebraeoportunidade.png", link: "#" },
    { nome: "Pdf", img: "pdfimage.png", link: "#" },
    { nome: "Gemini", img: "gemini.png", link: "#" },
    { nome: "Data sebrae", img: "datasebrae.png", link: "#" },
    { nome: "Chat gpt", img: "chatgpt.png", link: "https://chatgpt.com" },
    { nome: "Copilot", img: "copilot.png", link: "#" },
    { nome: "Heygen", img: "heygen.png", link: "#" },
    { nome: "Gamma", img: "gammaai.png", link: "#" },
    { nome: "Ideogram", img: "ideogram.png", link: "#" },
    { nome: "Junia", img: "juniaai.png", link: "#" },
    { nome: "Grain", img: "grainai.png", link: "#" }
];

const sistemasSebraeNacional = [
    { nome: "Assinatura digital", img: "assinaturadigital.png", link: "#" },
    { nome: "Sebrae previdencia", img: "sebraeprevidencia.png", link: "#" },
    { nome: "SAS", img: "sas.png", link: "#" },
    { nome: "Foco", img: "foco.png", link: "#" },
    { nome: "ALI", img: "ali.png", link: "#" },
    { nome: "PDFixer", img: "pdfixer.png", link: "#" },
    { nome: "SGO", img: "portalsgo.png", link: "#" },
    { nome: "Universidade corporativa", img: "universidadecorporativa.png", link: "#" },
    { nome: "Meu RH", img: "meurh.png", link: "#" },
    { nome: "Leme", img: "leme.png", link: "#" },
    { nome: "Tv Sebrae", img: "tvsebrae.png", link: "#" },
    { nome: "SGF", img: "sgf.png", link: "#" }
];

// 2. FUNÇÃO DE RENDERIZAÇÃO
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

// 3. INICIALIZAÇÃO (Cria os elementos antes de configurar o slide)
renderizarSistemas(sistemasSebraeAmapa, 'grid-sebrae-amapa');
renderizarSistemas(sistemasInteligenciaDados, 'grid-ia-dados');
renderizarSistemas(sistemasSebraeNacional, 'grid-sebrae-nacional');

// 4. LÓGICA DO SLIDE
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

// Estado inicial
moveSlide();