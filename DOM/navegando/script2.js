//Navegando pelos elementos irmãos

const element = document.querySelector('body script')

console.log(element.nextSibling)//considera espaço vázio
console.log(element.nextElementSibling)//Não considera espaço vázio
console.log(element.previousSibling)//considera espaço vázio
console.log(element.previousElementSibling)//não considera espaço vázio
