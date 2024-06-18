/*Fazer um programa que receba um conjunto de 10 valores
inteiros, armazene em um array, verifique
se algum dos valores é igual a média dos mesmos.*/
/*Tiago Daniel de Sousa Filho */
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(9);
var soma = 0;
var media = 0;
for (var i = 0; i < 10; i++) {
    array1[i] = parseInt(teclado("Digite o ".concat(i + 1, "\u00BA valor: ")));
    soma += array1[i];
}
media = soma / 10;
console.log();
console.log("A m\u00E9dia geral \u00E9 ".concat(media));
console.log();
for (var i = 0; i < 10; i++) {
    if (media == array1[i]) {
        console.log("O valor ".concat(array1[i], " \u00E9 igual ao da m\u00E9dia geral!"));
    }
    else {
        console.log("O valor ".concat(array1[i], " \u00E9 diferente ao da m\u00E9dia geral!"));
    }
}
