// Mudar estilos usando o classList

//classList pega um lista de classes assim como o proprio nome já diz
const Newelement = document.querySelector('body')

//adicionando uma nova classe
Newelement.classList.add('active','green')

//removendo elemento
Newelement.classList.remove('active')

//toggle se a classe existir ele tira, se não ele adiciona
Newelement.classList.toggle('active')


console.log(Newelement.classList)