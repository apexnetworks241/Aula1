document.title = "Novo Título"

cyan = 247

function mudaCorDoTexto() {
  cyan = (cyan + 32) % 256; // Usa módulo para manter entre 0 e 255
  document.body.style.color = `rgb(0, ${cyan}, 255)`;
}

// Função para zerar a cor
function zeraCyan() {
  cyan = 0;
  document.body.style.color = `rgb(0, 0, 255)`; // Azul puro ao zerar
}

// Função para abrir o site oficial do Grêmio em uma nova aba
function abrirUrl() {
  window.open("https://gremio.net/", "_blank");
}

// Pega o botão e adiciona o evento de clique para zerar a cor
const botao = document.querySelector("button");
if (botao) {
  botao.addEventListener("click", zeraCyan);
} else {
  console.warn("Botão não encontrado no HTML.");
}

// Inicia o efeito de mudança de cor a cada 200ms
window.setInterval(mudaCorDoTexto, 200);