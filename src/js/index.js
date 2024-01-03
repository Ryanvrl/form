const botao = document.querySelector('.botao')
const inputs = document.querySelectorAll('.input')
const label = document.querySelectorAll('.label')

    botao.addEventListener('click', () => {
        inputs.forEach((item, i) => {
            console.log(i);
        if (inputs[i].value === "") {
            label[i].classList.add('incompleto')
            inputs[i].classList.add('nao-preenchido')
            inputs[i].classList.remove('preenchido')
            
            
        } else {
            inputs[i].classList.add('preenchido')
            label[i].classList.remove('incompleto')
        }

    })
})

