document.title = "Novo Título"

cyan = 247

function mudaCorDoTexto(){
    cyan = cyan + 32
document.body.style.color = `rgb(0, ${cyan}, 255)`;

}

function zeraCyan(){
    cyan = 0
}

botao = document.querySelector("button")

botao.addEventListener("click", zeraCyan)

window.setInterval(mudaCorDoTexto, 200)