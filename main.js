const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnReset = document.querySelector("#btnReset")
btnOpen.addEventListener("click", handleOpenClick)
btnReset.addEventListener("click", handleResetClick)

function handleOpenClick(event) {
  event.preventDefault(); // quer dizer "não faça o padrão"
  toggleScreen();
  screen2.querySelector("#text").innerText = messages[sorteio]


}


let messages = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Nenhum desafio vai ser impossível de superar, se tiver paciência e determinação. Tudo vai dar certo",
  "Está enganado quem pensa que o meu coração cheio de cicatrizes não tem forças para prossegui",
  "O caminho para realizar nossos sonhos fica menor, a cada passo de superação que damos"
]
let sorteio = Math.floor(Math.random() * messages.length)


function handleResetClick() {
  toggleScreen()
  sorteio = Math.floor(Math.random() * messages.length)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
