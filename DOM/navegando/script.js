//NAVEGANDO PELOS ELEMENTOS PAIS

//parentNode e parentElement
const parents = document.querySelector('h1')

console.log(parents.parentNode)

//childNode pega todos os filhos em formato nodelist

//NAVEGANDO PELOS ELEMENTOS FILHOS
const childrenElements = document.querySelector('body')

//childNode pega todos os filhos em formato nodelist
console.log(childrenElements.childNodes)

//children trás em hmtl collection e elimina os espaços vázios
console.log(childrenElements.children)

console.log(childrenElements.firstChild)//considera o espaço vázio. Primeiro elemento
console.log(childrenElements.firstElementChild)//não considera espaço vázio.

console.log(childrenElements.lastChild) // ultimo elemento
console.log(childrenElements.lastElementChild)

