var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaDireita = window.document.getElementById("seta_direita")
var setaEsquerda = window.document.getElementById("seta_esquerda")

function rolarParaDireita() {
    bruna.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function rolarParaEsquerda() {
    bruna.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}