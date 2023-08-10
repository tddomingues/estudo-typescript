"use strict";
//number
let num1 = 21.2;
let num2 = 0x78CF;
let num3 = 0o577;
let num4 = 0b11101;
console.log("Ponto flutuante " + num1);
console.log("Hexadecimal " + num2);
console.log("Octal " + num3);
console.log("Binário " + num4);
//bigint: para números grandes sem causar erros (es2020 ou ESNEXT)
let big1 = 90331231233n;
let big2 = 32783n;
let big3 = 0x20000000003n;
let big4 = 274877906944n;
console.log(big1);
console.log(big2);
console.log(big3);
console.log(big4);
