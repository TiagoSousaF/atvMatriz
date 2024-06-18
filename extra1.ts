/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e 
devolve a média do aluno. */
/*Tiago Daniel de Sousa Filho */

console.clear();
const teclado = require(`prompt-sync`)();

let array1: number [] = new Array (4);
let soma: number = 0;
let media: number = 0;

for(let i = 0; i < 5; i++){
    array1[i] = parseInt(teclado(`Digite a ${i+1}ª nota: `));
    soma += array1[i];
}

media = soma / 5;

console.log(`As notas foram ${array1}!`)
console.log(`A soma é ${soma}!`);
console.log(`A média é ${media}!`);
