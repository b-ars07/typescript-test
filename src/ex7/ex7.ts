/*
* Написать функцию, которая принимает любые данные и возвразает строку. Или undefined, если нельзя привести к строке
* */

function dataToString<T>(data: T): string | undefined {
    if (Array.isArray(data)) {
        return JSON.stringify(data)
    }

    switch (typeof data) {
        case "string":
            return data
        case "number":
        case "bigint":
        case "boolean":
        case "object":
        case "symbol":
        case "function":
            return JSON.stringify(data)
        default:
            return undefined
    }
}
