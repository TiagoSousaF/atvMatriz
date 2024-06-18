console.clear();  
const teclado = require (`Prompt-sync`)();  
let minhaMatriz: string[][] = []; // declarando matriz  

let linha: number = 1;
let coluna: number = 1;

// z percorre as linhas  
for (let z = 0; z <= linha; z++) {  
    // Cria um array vazio para preencher a linha correspondente ao z  
    minhaMatriz[z] = [];  
    for (let x = 0; x <= coluna; x++) {  
        // Atribuicao via entrada de dados manual na variavel nome  
        let nome: string = teclado(`Digite o nome que vai estar no endereço [ ${z}, ${x}]  
                da matriz: `);  
        // Atribui nome na minhaMatriz do endereço dado por z e x  
        minhaMatriz[z][x] = nome;  
    }  
}  
// Imprime a matriz  
console.log(minhaMatriz);