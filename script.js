// Atividade Prática 03 - Estruturas de Repetição 1

// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = Infinity   //Infinity é o maior valor possível
let maiorAltura = -Infinity //-Infinity é o menor valor possível
for (let a=1; a <=5; a++) {
    const altura = Number(prompt(`1. Digite a altura da ${a}ª pessoa em centímetros` ))
    if (altura < menorAltura) {
        menorAltura = altura // após o primeiro looping o valor da menro altura passa a ser a da altura anterior
    }
    if (altura > maiorAltura) {
        maiorAltura = altura // após o primeiro looping, o valor da maior altura passa a ser a da altura anterior
    }
}
document.write(`1. A menor das alturas é ${menorAltura}cm e a maior delas é ${maiorAltura}cm.<br><br>`);


// 2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto Lucas tem 1,10m de altura e cresce 3 centímetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let alturaPedro = 1.5
let alturaLucas = 1.1
let anos = 0

while (alturaLucas < alturaPedro) { // se eu escrevesse <=, ele rodaria o código uma vez mais após alcançar a altura igual e então somaria mais uma vez as idades e mostraria o total de anos até passsar e não até alcançar
    anos++
    alturaPedro += 0.02
    alturaLucas += 0.03
}
document.write(`2. Daqui a ${anos-1} anos, Lucas tera a mesma altura que Pedro e daqui a ${anos} anos o terá passado. <br><br>`)



// 3. Escreva um algoritmo que faça a tabuada de um número e apresente o resultado de acordo com o modelo a seguir, sabendo que o multiplicando deverá ser fornecido pelo usuário (n) e a quantidade de iterações também (i).
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ...

const multiplicando = Number(prompt("3. Digite o número que você deseja saber a tabuada:"))
const multiplicadorFinal = Number(prompt("3. Digite até qual multiplicador você deseja saber os resultados:"))
document.write(`3. Segue abaixo a tabuada do número ${multiplicando} até o ${multiplicadorFinal}º multiplicador.<br>`)
// da pra solicitar por prompt o número de iterações (repetições) fazendo i<=número de iterações escolhidas e começando as iterações por 1 e não 0
for (let u=1; u<=multiplicadorFinal; u++) {
    document.write(`${multiplicando} x ${u} = ${multiplicando * u}<br>`)
} document.write(`<br>`)



// 4. Escreva um algoritmo que percorra os números inteiros entre 1 e 250 e verifique quais números são múltiplos de 3 e quais são múltiplos de 5.

let multiplo3 = " "
let multiplo5 = " "
for (j=1; j<=250; j++) {
    if (j%3===0) {
        multiplo3 += j + ", "
    }
    if (j%5===0) {
        multiplo5 += j + ", "
    }
}
document.write(`4. Múltiplos de 3 e 5 até o nº 250 <br> <strong>Múltiplos de 3 até o nº 250:</strong> <br>${multiplo3}<br><strong> Múltiplos de 5 até o nº 250:</strong> <br>${multiplo5}<br><br>`)



// 5. Faça um programa usando a estrutura “for” que leia um número inteiro positivo e mostre na tela uma contagem de 0 até o valor digitado:
// Ex: Digite um valor: 9
// Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!

let digiteNumero
do {
    digiteNumero = Number(prompt("5. Digite um número inteiro e positivo:"))
} while (digiteNumero < 0 || isNaN(digiteNumero) || !Number.isInteger(digiteNumero))

let mensagem = "5. Contagem: "
for (l=0;l<=digiteNumero;l++) {
    mensagem += l + ", "
}
document.write(`${mensagem} FIM!<br><br>`)


// 6. Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que forem primos, exatamente como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

document.write(`6. Números primos: <br>`)

for (let p=30; p > 0; p--) {    
    let divisores = 0
    for (let g=1; g <= p; g++) {
        if (p % g === 0) {
            divisores++
        }
    }    
    document.write(divisores!==2 ? ` ${p} ` : ` <strong>[${p}]</strong> `)
}

document.write(`<br><br>`)

// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores negativos e o percentual de valores negativos e positivos.

let sumNumbers = 0
let positiveNumbers = 0
let negativeNumbers = 0

for (t=1; t<=10; t++) {
    let tenNumbers = Number(prompt(`7. Digite o número ${t} do total de 10:`))
    sumNumbers+= tenNumbers
    if (tenNumbers > 0) { positiveNumbers++ }
    if (tenNumbers < 0) { negativeNumbers++ }
}

document.write(`7. A média de todos os números digitados é de <strong>${sumNumbers/10}</strong>.<br>`)
document.write(`O total de números <strong>positivos</strong> digitados foi de <strong>${positiveNumbers}</strong>, o que equivale a <strong>${positiveNumbers*10}%</strong> do total.<br>`)
document.write(`O total de números <strong>negativos</strong> digitados foi de <strong>${negativeNumbers}</strong>, o que equivale a <strong>${negativeNumbers*10}%</strong> do total.<br><br>`)





// // EXTRA - Detector de números primos + descoberta dos fatorais de números não primos

// // DETECTOR DE NÚMEROS PRIMOS
// const  numeroFinal = 300
// for (let i=1; i<=300; i++) {
//     let detect = 0
//     for (let k=1; k<=i; k++) {
//         if (i % k == 0) {
//             detect++
//         }
//     }
//     document.write(detect===2? ` <strong>[${i}]</strong> ` : ` ${i} ` )
// }
