//generics atri um tipo de maneira dinâmica

const returnValue = <T>(value: T) => {
    return value
}

const msg = returnValue<string>("Hello World")
const num = returnValue<number>(21 )