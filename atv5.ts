/*5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.*/
/*Tiago Daniel de Sousa Filho*/

console.clear();  
const teclado = require (`Prompt-sync`)();  
let minhaMatriz: number[][] = [];

let linha: number = 2;
let coluna: number = 2;

for (let z = 0; z <= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x = 0; x <= coluna; x++) {  
        let numero: number = teclado(`Digite o nome que vai estar no endereço [ ${z}, ${x}]  
                da matriz: `);  
        minhaMatriz[z][x] = numero;  
    }  
}  
console.log(minhaMatriz);  