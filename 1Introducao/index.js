"use strict";
//possui um copilador que irá analisar eventuais erros, pois
//o ts tem uma tipagem estática.
let age = 2;
const firstName = "Tiago";
let idk = 5;
idk = true;
const ids = [1, 2, 3, 4, 5, 6];
//tupla
const person = [2, "Maria"];
//lista de tuplas
const people = [
    [1, "João"],
    [2, "Tiago"],
    [3, "Lucas"]
];
//intersections
const productId = 2;
//enum: serve para dar nome há algo, isso torna o codigo mais interativo
var Status;
(function (Status) {
    Status[Status["Admin"] = 1] = "Admin";
    Status[Status["User"] = 2] = "User";
})(Status || (Status = {}));
function checkStatus(status) {
    switch (status) {
        case Status.Admin:
            console.log("... é um admin");
            break;
        case Status.User:
            console.log("...é um usuário");
            break;
    }
}
checkStatus(1);
//type assertions: muda a tipagem
const productName = "Boné";
let itemid1 = productName;
let itemId2 = productName;
