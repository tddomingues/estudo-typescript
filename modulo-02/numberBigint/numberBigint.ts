//number

let num1: number = 21.2;
let num2: number = 0x78CF;
let num3: number = 0o577;
let num4: number = 0b11101;

console.log("Ponto flutuante " + num1)
console.log("Hexadecimal " + num2)
console.log("Octal " + num3)
console.log("Binário " + num4)

//bigint: para números grandes sem causar erros (es2020 ou ESNEXT)

let big1: bigint = 90331231233n
let big2: bigint = 0b1000000000001111n
let big3: bigint = 0x20000000003n
let big4: bigint = 0o4000000000000n

console.log(big1)
console.log(big2)
console.log(big3)
console.log(big4)