//armazenamento - em array - de campos de diferentes tipos

//igual tipo
let numero: number[] = [1, 2, 3, 4]

//tuple
let pessoa: [string, string, number]
pessoa = ["Tiago", "Desenvolvedor", 25]
console.log(pessoa)
console.log(pessoa[0])

//com label
let pessoa2: [nome: string, profissao: string, idade: number] = ["Tiago", "Desenvolvedor", 25]
console.log(pessoa2)

//com spread operator
let listafrutas: [string, ...string[]] = ['Kiwi', 'Maça', 'Banana', 'Pêra', 'Laranja'] 
console.log(...listafrutas)

//heterogênea
let listafrutas2: [number, boolean, ...string[]] = [2, true, ...listafrutas]
console.log(listafrutas2)

//function
function listarPessoas(nome: string[], idade: number[]) {
    return [...nome, ...idade]
}
let resultado = listarPessoas(["Tiago", "Mariia", "Emily"], [25, 20, 30])
console.log(resultado)

//?
type Nome = | [primeiroNome: string, sobrenome: string] | [primeiroNome: string, meioNome: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return[...nome]
}

console.log(criarPessoa("Tiago", "Domingues"))
console.log(criarPessoa("Tiago", "Domingues", "Silva"))