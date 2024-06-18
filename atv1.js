console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = []; // declarando matriz  
var linha = 1;
var coluna = 1;
// z percorre as linhas  
for (var z = 0; z <= linha; z++) {
    // Cria um array vazio para preencher a linha correspondente ao z  
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        // Atribuicao via entrada de dados manual na variavel nome  
        var nome = teclado("Digite o nome que vai estar no endere\u00E7o [ ".concat(z, ", ").concat(x, "]  \n                da matriz: "));
        // Atribui nome na minhaMatriz do endereço dado por z e x  
        minhaMatriz[z][x] = nome;
    }
}
// Imprime a matriz  
console.log(minhaMatriz);
