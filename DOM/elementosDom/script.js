//pegando o filho atráves da DOM
const element = document.getElementById('title')
const classElement = document.getElementsByClassName('text')
const tagName = document.getElementsByTagName('meta')
const querySelector = document.querySelector('[src]')//pega atráves do seletor
//pegando todos elementos com querySelector
const Allquery = document.querySelectorAll('.text')

console.log(Allquery)

//Nodelist aceita fazer um forEach
//HTMLCollection não aceita forEach