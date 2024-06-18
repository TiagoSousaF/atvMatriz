/*Fazer um programa que lê 10 valores, armazene 
em um array, e imprime o maior 
e o menor valores lidos.*/
/*Tiago Daniel de Sousa Filho */

console.clear();
const teclado = require(`prompt-sync`)();

let array1: number [] = new Array (9);
let maior: number= 0;
let menor: number= 0;


for(let i = 0; i < 10; i++){
    array1[i] = parseInt(teclado(`Digite o ${i+1}º valor: `));
}

maior = array1[0];
menor = array1[0];

for(let i = 0; i < 10; i++){
    if(array1[i] > maior){
        maior = array1[i];
    }
}

for(let i = 0; i < 10; i++){   
    if(array1[i] < menor){
        menor = array1[i];
    }
}

console.log(`O maior valor é ${maior}`);
console.log(`O menor valor é ${menor}`);

