# Portal de Sistemas - Sebrae Amapá 

Este projeto é uma interface interativa e responsiva desenvolvida para servir como porta de entrada (Home Page) dos sistemas utilizados pelo Sebrae Amapá. O objetivo é centralizar o acesso às ferramentas de forma intuitiva, organizada e padronizada, preservando a identidade do Sebrae

# Tecnologias Utilizadas

* HTML5: Estruturação semântica do conteúdo.
* *CSS3*: Design moderno utilizando CSS Grid, Flexbox e animações personalizadas.
* JavaScript (ES6+): Lógica do carrossel, renderização dinâmica de dados e interatividade.

# Funcionalidades

* Carrossel Dinâmico: Navegação suave entre categorias de sistemas (Amapá, Inteligência de Dados e Nacional).
* Totalmente Responsivo: O layout se adapta automaticamente para dispositivos móveis, organizando os itens em grades de 2 colunas para melhor usabilidade.

* Navegação Híbrida: Suporte para navegação via:
    * Botões na tela (Próximo/Anterior).
    * Setas do teclado (Direita/Esquerda).
    * Scroll do mouse (Roda do mouse).

* Renderização Dinâmica: Os sistemas são carregados a partir de objetos JavaScript, facilitando a atualização de links e ícones sem mexer na estrutura HTML.

# Estrutura de Pastas

Para manter a organização e facilitar a manutenção, o projeto foi dividido em módulos:

`text
/
├── index.html          # Arquivo principal
├── assets/             # Logos e ícones dos sistemas
├── CSS/
│   ├── base.css        # Estilo global
│   ├── layout.css      # Estrutura do carrossel e das grids
│   └── components.css  # Estilos de botões, títulos e dos cards
└── JS/
    ├── data.js         # Banco de dados dos sistemas (Links e nomes)
    ├── ui.js           # Lógica de renderização da interface
    ├── carousel.js     # Inteligência de movimento e controles
    └── script.js       # Inicializador do projeto