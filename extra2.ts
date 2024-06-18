/*Fazer um programa que receba um conjunto de 10 valores 
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.*/
/*Tiago Daniel de Sousa Filho */

console.clear();
const teclado = require(`prompt-sync`)();

let array1: number [] = new Array (9);
let soma: number = 0;
let media: number = 0;

for(let i = 0; i < 10; i++){
    array1[i] = parseInt(teclado(`Digite o ${i+1}º valor: `));
    soma += array1[i];
}

media = soma / 10;

console.log();
console.log(`A média geral é ${media}`);
console.log();


for(let i = 0; i < 10; i++){
    if(media == array1[i]){
        console.log(`O valor ${array1[i]} é igual ao da média geral!`);
    }else{ console.log(`O valor ${array1[i]} é diferente ao da média geral!`);}
}
