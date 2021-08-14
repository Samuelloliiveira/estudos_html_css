//createElements
const div = document.createElement('div')
div.innerText = 'Olá Devs!'

// append prepend
const body = document.querySelector('body')

body.append(div)//append add algo depois
body.prepend(div)//prepend add algo antes

//insertDefore add entre elementos
const script = body.querySelector('header')
body.insertBefore(div, script)
//forma de inserir após
const header = body.querySelector('header')
body.insertBefore(div, header.nextSibling)