//possui um copilador que irá analisar eventuais erros, pois
//o ts tem uma tipagem estática.

let age: number = 2
const firstName: string = "Tiago"
let idk: any = 5
idk = true

const ids: number[] = [1, 2, 3, 4, 5, 6]

//tupla
const person: [number, string] = [2, "Maria"]

//lista de tuplas
const people: [number, string][] = [
    [1, "João"],
    [2, "Tiago"],
    [3, "Lucas"]
]

//intersections
const productId: string | number = 2

//enum: serve para dar nome há algo, isso torna o codigo mais interativo

enum Status {
    Admin = 1,
    User = 2
}

function checkStatus(status: number) {
    switch (status) {
        case Status.Admin:
            console.log("... é um admin")
            break
        case Status.User:
            console.log("...é um usuário")
            break
    }
}
checkStatus(1)

//type assertions: muda a tipagem
const productName: any = "Boné"
let itemid1 = productName as string
let itemId2 = <string>productName