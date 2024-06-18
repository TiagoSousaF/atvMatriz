/*Fazer um programa que lê 10 valores, armazene
em um array, e imprime o maior
e o menor valores lidos.*/
/*Tiago Daniel de Sousa Filho */
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(9);
var maior = 0;
var menor = 0;
for (var i = 0; i < 10; i++) {
    array1[i] = parseInt(teclado("Digite o ".concat(i + 1, "\u00BA valor: ")));
}
maior = array1[0];
menor = array1[0];
for (var i = 0; i < 10; i++) {
    if (array1[i] > maior) {
        maior = array1[i];
    }
}
for (var i = 0; i < 10; i++) {
    if (array1[i] < menor) {
        menor = array1[i];
    }
}
console.log("O maior valor \u00E9 ".concat(maior));
console.log("O menor valor \u00E9 ".concat(menor));
