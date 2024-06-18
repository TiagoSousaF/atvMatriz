/*9- Crie uma matriz 6x6 com entrada manual. Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.*/
/*Tiago Daniel de Sousa Filho*/

console.clear();  
const teclado = require (`Prompt-sync`)();  
let minhaMatriz: number[][] = [];

let linha: number = 5;
let coluna: number = 5;
let soma: number = 0;

for (let z = 0; z <= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x = 0; x <= coluna; x++) {  
        let numero: number = parseInt (teclado(`Digite o número que vai estar no endereço [ ${z}, ${x}]  
            da matriz: `));  
        minhaMatriz[z][x] = numero;  
    }  
} 

console.log(minhaMatriz);

for (let w = 0; w <= linha; w++) {  
    //minhaMatriz[w][];  
    for (let y = 0; y <= coluna; y+=2) {  
        soma += minhaMatriz [w] [y];
    }  
}

console.log(`A soma das colunas pares é ${soma}!`);