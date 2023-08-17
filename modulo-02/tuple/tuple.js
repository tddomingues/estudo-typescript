"use strict";
//armazenamento - em array - de campos de diferentes tipos
//igual tipo
let numero = [1, 2, 3, 4];
//tuple
let pessoa;
pessoa = ["Tiago", "Desenvolvedor", 25];
console.log(pessoa);
console.log(pessoa[0]);
//com label
let pessoa2 = ["Tiago", "Desenvolvedor", 25];
console.log(pessoa2);
//com spread operator
let listafrutas = ['Kiwi', 'Maça', 'Banana', 'Pêra', 'Laranja'];
console.log(...listafrutas);
//heterogênea
let listafrutas2 = [2, true, ...listafrutas];
console.log(listafrutas2);
//function
function listarPessoas(nome, idade) {
    return [...nome, ...idade];
}
let resultado = listarPessoas(["Tiago", "Mariia", "Emily"], [25, 20, 30]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa("Tiago", "Domingues"));
console.log(criarPessoa("Tiago", "Domingues", "Silva"));
