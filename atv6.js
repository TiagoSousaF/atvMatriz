/*6-Crie uma matriz 3x3 com entrada manual de números aceitando somente números de 0 a 9. Em seguida, exiba a matriz na tela.*/
/*Tiago Daniel de Sousa Filho*/
console.clear();
var teclado = require("Prompt-sync")();
var minhaMatriz = [];
var linha = 2;
var coluna = 2;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        while (true) {
            var numero = teclado("Digite um n\u00FAmero de 0 a 9 que vai estar no endere\u00E7o [ ".concat(z, ", ").concat(x, "] da matriz: "));
            if (numero >= 0 && numero <= 9) {
                minhaMatriz[z][x] = numero;
                break;
            }
            else
                console.log("Valor inv\u00E1lido! insira outro!");
        }
    }
}
console.log(minhaMatriz);
