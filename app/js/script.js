console.log('hola')
const headerElement = document.querySelector('.header')
const toggleButtonElement = document.getElementById('toggle-button')
const hasFadeElements = document.querySelectorAll('.has-fade')
console.log(toggleButtonElement)

toggleButtonElement.addEventListener('click', () => {

    if(headerElement.classList.contains('open')){
            headerElement.classList.remove('open')
            hasFadeElements.forEach( element => {
                element.classList.add('fade-out')
                element.classList.remove('fade-in')
            })
    }else{
            headerElement.classList.add('open')
            hasFadeElements.forEach( element => {
                element.classList.add('fade-in')
                element.classList.remove('fade-out')
            })
    }
})