/* Fazer uma programa que recebe como parâmetro 5 notas
de um aluno ao longo do ano, armazene em um array e
devolve a média do aluno. */
/*Tiago Daniel de Sousa Filho */
console.clear();
var teclado = require("prompt-sync")();
var array1 = new Array(4);
var soma = 0;
var media = 0;
for (var i = 0; i < 5; i++) {
    array1[i] = parseInt(teclado("Digite a ".concat(i + 1, "\u00AA nota: ")));
    soma += array1[i];
}
media = soma / 5;
console.log("As notas foram ".concat(array1, "!"));
console.log("A soma \u00E9 ".concat(soma, "!"));
console.log("A m\u00E9dia \u00E9 ".concat(media, "!"));
