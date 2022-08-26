


let decisao = true
let resultados = []
let index = 0


while(decisao){

let numberA = prompt("Digite o primeiro valor")
let numberB = prompt("Digite o segundo valor")

let choice = prompt("Qual operação você deseja realizar ? 1 - Soma /// 2 - Subtração /// 3 - Multiplicação /// 4 - Divisão")

if(choice === "1"){
    console.log(`A Soma dos valores é ${Somar(numberA, numberB)}`)
    resultados[index] = Somar(numberA, numberB)
}

function Somar(numberA, numberB){
    return parseInt(numberA) + parseInt(numberB)
}

if(choice === "2"){
    console.log(`A Subtração dos valores é ${Subtracao(numberA, numberB)}`)
    resultados[index] = Subtracao(numberA, numberB)
}
function Subtracao(numberA, numberB){
    return parseInt(numberA) - parseInt(numberB)
}

if(choice === "3"){
    console.log(`A Multiplicação dos valores é ${Multiplicar(numberA, numberB)}`)
    resultados[index] = Multiplicar(numberA, numberB)
}
function Multiplicar(numberA, numberB){
    return parseInt(numberA) * parseInt(numberB)
}

if(choice === "4"){
    console.log(`A Divisão dos valores é ${Divisor(numberA, numberB)}`)
    resultados[index] = Divisor(numberA, numberB)
}
function Divisor(numberA, numberB){
    return parseInt(numberA) / parseInt(numberB)
}

function Historico(resultados){
    return resultados
}

decisao = prompt("Deseja continuar ?")
if(decisao === "Não"){
    console.log(`O historico dos resultados é: ${Historico(resultados)}`)
    decisao = false
}
else{
    index++
}
}


