//textContent
const element = document.querySelector('h1')
element.textContent = 'Olá Devs!' //alterando o conteúdo do h1
console.log(element.textContent)//pegando o conteúdo

/////////////////////////////////////////////////////////

//innerText - texto interno
element.innerText = 'Novo Dev'
console.log(element)

/////////////////////////////////////////////////////////

//innerHTML - HTML interno (add elemento html atráves do js)
element.innerHTML = 'Fala Dev <small>!!!</smaill>'

/////////////////////////////////////////////////////////

//value
const text = document.querySelector('input')
text.value = "qualquer texto"

const newText = document.getElementById('newText')
console.log(newText.value);

/////////////////////////////////////////////////////////

//Atributos dos elementos
const header = document.querySelector('header')
header.setAttribute('id','header')//setando um atributo ID ao header
const headerID = document.querySelector('#header')
console.log(headerID);
console.log(headerID.getAttribute('id'));//pegando um atributo

header.removeAttribute('class')//removendo atributos
console.log(header);
