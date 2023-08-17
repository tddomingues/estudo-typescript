"use strict";
//ex1
let frutas = ["Banana", "Maça", "Morango"];
console.log(frutas[0]);
//ex2
let frutas2 = ["Banana", "Maça", "Morango"];
console.log(frutas2[1]);
//ex3: push
frutas2.push("Melância");
console.log(frutas2);
//ex4
console.log(frutas2.length);
//ex5
frutas2 = [...frutas2, "Kiwi", "Tomate"];
console.log(frutas2);
//ex6
let linguagens = new Array("C", "C#", "C++", "JAVA"); //terceiro modo de criar array
function fuctionLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
fuctionLinguagens(linguagens);
