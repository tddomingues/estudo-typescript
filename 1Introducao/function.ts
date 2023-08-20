const sum = (x: number, y: number): number => {
    return x + y
}

console.log(sum(2, 3))

const log = (msg: string): void => {
    //void não retorna nada
    console.log(msg)
}

//function com interface
  
interface MathFunc {
    (x: number, y: number): number
}

const mult: MathFunc = (x: number, y: number): number => {
    return x * y
}


