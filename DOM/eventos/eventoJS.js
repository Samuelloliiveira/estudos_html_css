// Adicionando eventos via JS
const p = document.querySelector('p')

//ouvidor de eventos kkk 
//primeiro atributo é o tipo de evento, o segundo é a função
//essa é a maneira mais recomentada
//dessa maneira é empilhada toda funcionalidade
p.addEventListener('mousemove', () => {
    console.log('evento JS')
})

// Outra método de add evento via JS
//dessa forma ele executa sempre a ultima ignorando todo o resto
const h2 = document.querySelector('h2')
h2.onclick = () => {
    console.log('outro método de evento JS');
}