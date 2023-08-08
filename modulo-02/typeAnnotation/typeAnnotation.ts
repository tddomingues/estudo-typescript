//variáveis
let nome: string = "Tiago"
console.log(nome)

//arrays
let automoveis: string[] = ["Carro", "Moto", "Caminhão"]
console.log(automoveis)

//objetos
let carro: {
    nome: string;
    ano: number;
    preco: number;
}

carro = {nome: "Fusca", ano: 1972, preco: 12000}
console.log(carro)

//function
function multiplicar(num1: number, num2: number) {
    return num1 * num2
}
console.log(multiplicar(2, 4))