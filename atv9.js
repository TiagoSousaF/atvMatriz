/*9- Crie uma matriz 6x6 com entrada manual. Em seguida, calcule e exiba a soma dos elementos das colunas pares da matriz.*/
/*Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 5;
var coluna = 5;
var soma = 0;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        var numero = parseInt(teclado("Digite o n\u00FAmero que vai estar no endere\u00E7o [ ".concat(z, ", ").concat(x, "]  \n            da matriz: ")));
        minhaMatriz[z][x] = numero;
    }
}
console.log(minhaMatriz);
for (var w = 0; w <= linha; w++) {
    //minhaMatriz[w][];  
    for (var y = 0; y <= coluna; y += 2) {
        soma += minhaMatriz[w][y];
    }
}
console.log("A soma das colunas pares \u00E9 ".concat(soma, "!"));
