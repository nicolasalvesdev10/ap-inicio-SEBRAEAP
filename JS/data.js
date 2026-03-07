// Dados dos Sistemas
const sistemasSebraeAmapa = [
    { nome: "Sebrae tec", img: "../ASSETS/sebraeap/sebraetec.png", link: "https://sebraetecadm.ap.sebrae.com.br/site/login" },
    { nome: "Reserva de salas", img: "../ASSETS/sebraeap/reservasalas.png", link: "http://ap-salas/day.php?year=2026&month=02&day=23&area=6&room=32" },
    { nome: "Loja virtual", img: "../ASSETS/sebraeap/lojavirtual.png", link: "https://ap.loja.sebrae.com.br/" },
    { nome: "Frotas", img: "../ASSETS/sebraeap/frotas.png"  , link: "http://ap-salas/day.php?year=2026&month=02&day=23&area=6&room=32" },
    { nome: "Ramais telefonicos", img: "../ASSETS/sebraeap/ramaistelefonicos.png", link: "http://ap-inicio/RamaisTelefonicos2023.pdf" },
    { nome: "Sistema de senha", img: "../ASSETS/sebraeap/sistemadesenha.png"  , link: "http://172.16.8.100/novosga2/public/login"},
    { nome: "Sebrae site", img: "../ASSETS/sebraeap/sesuite.png" , link: "https://sebraeap.softexpert.com/softexpert/workspace?page=home" },
    { nome: "Se suite", img: "../ASSETS/sebraeap/trocarsenhausuario.png" , link: "https://fs.sebrae.com.br/adfs/portal/updatepassword" },
    { nome:  "Portal do empreendedor", img: "../ASSETS/sebraeap/portalempreendedor.png", link: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor"},
    { nome:  "Correio", img: "../ASSETS/sebraeap/correio.png" , link: "https://outlook.office.com/mail/"},
    { nome: "Alterar senha do usuário", img: "../ASSETS/sebraeap/appushr.png", link: "https://hub.appus.com.br/login?Redirect=%2F" },
    { nome: "trocar senha do usuário", img: "../ASSETS/sebraeap/sebraesite.png", link:"#"}
];

const sistemasInteligenciaDados = [
    { nome: "Qlik sense", img: "../ASSETS/sebraeia/qlik.png", link: "https://analisededados.sebrae.com.br/" },
    { nome: "Radar sebrae de oportunidades", img: "../ASSETS/sebraeia/radar.png", link: "https://www.radarsebrae.com.br/" },
    { nome: "Pdf", img: "../ASSETS/sebraeia/pdf.png", link: "https://askyourpdf.com/pt" },
    { nome: "Gemini", img: "../ASSETS/sebraeia/gemini.png", link: "https://gemini.google.com/" },
    { nome: "Data sebrae", img: "../ASSETS/sebraeia/datasebrae.png", link: "https://datasebrae.com.br/" },
    { nome: "Copilot", img: "../ASSETS/sebraeia/copilot.png", link: "https://copilot.microsoft.com/" },
    { nome: "Chat gpt", img: "../ASSETS/sebraeia/chatgpt.png", link: "https://chatgpt.com" },
    { nome: "Heygen", img: "../ASSETS/sebraeia/heygen.png", link: "https://www.heygen.com/" },
    { nome: "Gamma", img: "../ASSETS/sebraeia/gamma.png", link: "https://gamma.app/" },
    { nome: "Ideogram", img: "../ASSETS/sebraeia/ideogram.png", link: "https://ideogram.ai/" },
    { nome: "Junia", img: "../ASSETS/sebraeia/junia.png", link: "https://www.junia.ai/" },
    { nome: "Grain", img: "../ASSETS/sebraeia/grain.png", link: "https://grain.com/" }
];

const sistemasSebraeNacional = [
    { nome: "Assinatura digital", img: "../ASSETS/sebraenacional/assinaturadigital.png", link: "https://amei-interno.sebrae.com.br/auth/realms/interno/protocol/openid-connect/auth?client_id=assinatura-digital&redirect_uri=https%3A%2F%2Fassinaturadigital.sebrae.com.br%2Fportal%2F&state=463e726b-8df8-447f-ab38-a2bc15e87d3e&response_mode=fragment&response_type=code&scope=openid&nonce=999e0f44-77f9-4756-8110-9db4bf01da21" },
    { nome: "Sebrae previdencia", img: "../ASSETS/sebraenacional/sebraeprev.png", link: "http://sebraeprevidencia.com.br/" },
    { nome: "empretec", img: "../ASSETS/sebraenacional/empretec.png", link: "https://atividades-empretec.sebrae.com.br/login" },
    { nome: "Foco", img: "../ASSETS/sebraenacional/foco.png", link: "https://sebraecrm.my.salesforce.com/" },
    { nome: "ALI", img: "../ASSETS/sebraenacional/ali.png", link: "https://acompanhamentoali.sebrae.com.br/" },
    { nome: "Universidade corporativa", img: "../ASSETS/sebraenacional/universidadecorporativa.png", link: "https://universidade.sebrae.com.br/" },
    { nome: "SGO", img: "../ASSETS/sebraenacional/sgo.png", link: "https://amei-interno.sebrae.com.br/auth/realms/interno/protocol/openid-connect/auth?client_id=sgolite&response_type=code&redirect_uri=https://sgolite.sebrae.com.br/Portal" },
    { nome: "PDFixer", img: "../ASSETS/sebraenacional/pdfixer.png", link: "https://amei-interno.sebrae.com.br/auth/realms/interno/protocol/openid-connect/auth?client_id=pdfixer-se&redirect_uri=https%3A%2F%2Fpdfixer.se.sebrae.com.br%2F&state=84a81710-dd0e-4558-8f28-acd7bc618739&response_mode=fragment&response_type=code&scope=openid&nonce=7bcba8b6-e514-4095-845b-da00ee186c09&code_challenge=Oo9hk0CInBAhtL76-iynDnD7AXC3nUNNmxmt9KTxcio&code_challenge_method=S256" },
    { nome: "Meu RH", img: "../ASSETS/sebraenacional/meurh.png", link: "https://meurh.sebrae.com.br/FrameHTML/web/app/RH/PortalMeuRH/#/login" },
    { nome: "Leme", img: "../ASSETS/sebraenacional/leme.png", link: "https://leme.sebrae.com.br/web/sebrae/login" },
    { nome: "Tv Sebrae", img: "../ASSETS/sebraenacional/sebraetv.png", link: "https://www.youtube.com/tvsebrae" },
    { nome: "SGF", img: "../ASSETS/sebraenacional/sgf.png" , link: "https://sgf.sebrae.com.br/home/" }
    
];
