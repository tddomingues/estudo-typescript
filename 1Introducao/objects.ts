//Type
type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    password?: string //o ? garante que essa chave é opcional
    listProducts?: string[]
    orders?: Order[]
}

const user: User = {
    firstName: "Tiago",
    age: 25,
    //password: "332"
    orders: [{productId: "Caneta", price: 21}]
}

const printLog = (msg?: string) => {
    //quando for passar um parâmetro opcional coloque o "?"
}

printLog(user.password) 
//se fosse assim: printLog(user.password!) o ! garante que o parâmetro existe, ai nao precisa do ? 

//Unions
type Author = {
    books: string[]
    login?(): string
}

const author: Author & User = {
    firstName: "Mariia",
    age: 21,
    books: [],
    login() {
        return "ds2f"
    }
}

//Interfaces: muito parecido com types
interface UserInterface {
    firstName: string
    readonly email: string
}

const emailUser: UserInterface = {
    firstName: "Tiago",
    email: "ttx@gmail.com"
}
//emailUser.email = "t@gmail.com" -> nao pode ser alterado, é só leitura

interface AuthorInterface {
    books: string[]
}

const newAuthor: UserInterface & AuthorInterface = {
    firstName: "a",
    email: "b",
    books: []
}

