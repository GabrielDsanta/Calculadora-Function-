


let numberA = prompt("Digite o primeiro valor")
let numberB = prompt("Digite o segundo valor")

function Somar(numberA, numberB){
    return parseInt(numberA) + parseInt(numberB)
}

function Subtracao(numberA, numberB){
    return parseInt(numberA) - parseInt(numberB)
}

function Multiplicar(numberA, numberB){
    return parseInt(numberA) * parseInt(numberB)
}

function Divisor(numberA, numberB){
    return parseInt(numberA) / parseInt(numberB)
}


console.log(`A Soma dos valores é ${Somar(numberA, numberB)}`)
console.log(`A Subtração dos valores é ${Subtracao(numberA, numberB)}`)
console.log(`A Multiplicação dos valores é ${Multiplicar(numberA, numberB)}`)
console.log(`A Divisão dos valores é ${Divisor(numberA, numberB)}`)
