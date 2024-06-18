/*5- Crie uma matriz 3x3 com entrada manual de números. Em seguida, exiba a matriz na tela.*/
/*Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        var numero = teclado("Digite o nome que vai estar no endere\u00E7o [ ".concat(z, ", ").concat(x, "]  \n                da matriz: "));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
