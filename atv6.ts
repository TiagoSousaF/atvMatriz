/*6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.*/
/*Tiago Daniel de Sousa Filho*/

console.clear();  
const teclado = require (`Prompt-sync`)();  
let minhaMatriz: number[][] = [];

let linha: number = 2;
let coluna: number = 2;

for (let z = 0; z <= linha; z++) {  
    minhaMatriz[z] = [];  
    for (let x = 0; x <= coluna; x++) { 
        while(true) {
        let numero: number = teclado(`Digite um número de 0 a 9 que vai estar no endereço [ ${z}, ${x}] da matriz: `); 
        if(numero >= 0 && numero <= 9){
            minhaMatriz[z][x] = numero; 
            break;
        }else console.log(`Valor inválido! insira outro!`)
        }  
    }
}  
console.log(minhaMatriz);