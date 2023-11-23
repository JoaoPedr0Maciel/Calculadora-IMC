// Pegando os elemento do html e armazenando em variaveis
let weight = document.getElementById('peso')
let height = document.getElementById('altura')
const button = document.getElementById('button')
let result = document.getElementById('res')
let bmi = document.getElementById('imc')
let ideal = document.getElementById('ideal')


// Criando uma função com evento de click no botao.
button.addEventListener('click', () => {
    let meters = height.value / 100 // tranformando o valor digitado em centimetros para metros
    let calculation = weight.value / (meters * meters) // fazendo o calculo do IMC
    let input = weight.value || height.value

    let minimumWeight = 18.5 * (meters * meters) //caluclo do peso minimo
    let maximumWeight = 24.9 * (meters * meters) //calculo do peso maximo

    if (input !== '') {
        if (calculation <= 16.9) { // Se o calculo do imc for menor ou igual a 16.9 faça...
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Você está muito abaixo do peso.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`

        } else if (calculation >= 17 && calculation <= 18.4) {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Você está abaixo do peso.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`

        } else if (calculation >= 18.5 && calculation <= 24.9) {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Você está ano peso normal.'

        } else if (calculation >= 25 && calculation <= 29.9) {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Você está Acima do peso.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`

        } else if (calculation >= 30 && calculation <= 34.4) {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Obesidade grau I.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`

        } else if (calculation >= 35 && calculation <= 40) {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Obesidade Grau II.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`

        } else {
            result.classList.remove('hidden')
            bmi.classList.remove('hidden')
            ideal.classList.remove('hidden')
            bmi.innerHTML = `Seu Imc é ${calculation.toFixed(2)}`
            result.innerHTML = 'Obesidade grau III.'
            ideal.innerHTML = `Seu peso ideal esta entre <br> ${minimumWeight.toFixed(2)}kg e ${maximumWeight.toFixed(2)}kg`
        }



    } else {
        result.classList.remove('hidden')
        result.innerHTML = 'Por favor, digite seu peso e altura.'
        setTimeout(() => {
            result.classList.add('hidden')
        }, 3000)
    }



})