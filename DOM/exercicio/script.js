const modal = document.getElementById('openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

//criando evento para abrir o modal
modal.addEventListener('click', ()=> {
    //removendo invisible da lista de classes
    modalWrapper.classList.remove('invisible')
})

/*verificando de o evento 
e o escape e add novamente invisible a lista de classes*/ 
document.addEventListener('keydown', (event) => {

    //verificando se existe class invisible dentro do modalwrapper
    const checkExistence = modalWrapper.classList.contains('invisible')

    //Só executa esse bloco de código se caso não exista invisible
    if (!checkExistence) {

        const ifEscKey = event.key === 'Escape'

        if(ifEscKey) {
            modalWrapper.classList.add('invisible')
        }
    }

})
