// Argumento event
const input = document.querySelector('input')

input.onkeypress = function(event) {
    console.log(event.currentTarget.value) //pegando os valores do input
}

//exite categorias de eventos