//O Javascript dentro da DOM e muito relacionado a eventos

function print() {
    const text = document.querySelector('h1')
    text.style.color = "blue"

}

//função para recarregar a página
function reload() {
    location.reload()
}

//////////////////////////////////////////////////////
//   EVENTOS DE TECLADO

const input = document.querySelector('input')
input.onkeydown = function() {
    console.log('rodei');
}