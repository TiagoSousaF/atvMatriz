/*8- Crie uma matriz 4x4 com números aleatórios entre 0 e 20. Em seguida, exiba a matriz na tela e encontre o maior elemento da matriz e a posição em que ele se encontra.*/
/*Tiago Daniel de Sousa Filho*/
console.clear();
var minhaMatriz = [];
var linha = 3;
var coluna = 3;
for (var z = 0; z <= linha; z++) {
    minhaMatriz[z] = [];
    for (var x = 0; x <= coluna; x++) {
        minhaMatriz[z][x] = Math.floor(Math.random() * 21);
    }
}
var maiorNum = 0;
var posicaol = 0;
var posicaoc = 0;
for (var z = 0; z <= linha; z++) {
    for (var x = 0; x <= coluna; x++) {
        if (minhaMatriz[z][x] > maiorNum) {
            maiorNum = minhaMatriz[z][x];
            posicaol = z;
            posicaoc = x;
        }
    }
}
console.log(minhaMatriz);
console.log("O maior n\u00FAmero \u00E9 ".concat(maiorNum, "!"));
console.log("Ele se encontra na posi\u00E7\u00E3o: [".concat(posicaol, "],[").concat(posicaoc, "]"));
