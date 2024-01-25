// // Union Types
//
// function logId(id: string | number | boolean) {
//     console.log(id)
// }
//
// function logObject(obj : {a : number} | {b : number}) {
//     if ('a' in obj) {
//         console.log(obj.a)
//     } else {
//         console.log(obj.b)
//     }
// }
//
// // Literal Types
// function fetchWithAuth(url: string, method: 'get' | 'post') {
//
// }
//
// fetchWithAuth('dfd', 'post')
//
// // Type Aliases
//
// type httpMethod = 'get' | 'post'
//
// function fetchAuth(url: string, method: httpMethod) {
//
// }
//
// fetchAuth('dfd', 'post')
//
// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// }
//
// let user: User = {
//     name: 'Ars',
//     age: 29,
//     skills: ['1', '2']
// }
//
// // intersection
//
// type User1 = {
//     name: string,
//     age: number,
//     skills: string[]
// }
//
// type Role = {
//     id: number
// }
//
// type UserWithRole = User1 & Role
//
// let user1: UserWithRole = {
//     name: 'Ars',
//     age: 29,
//     skills: ['1', '2'],
//     id: 404
// }

// Interfaces

// interface User {
//     name: string,
//     age: number,
//     skills: string[],
//     log: (id: number) => string
// }
//
// interface UserWithRole extends User{
//     id: number
// }
// let roleId: number = 2;
//
// let user: UserWithRole = {
//     age: 29,
//     id: 1,
//     name: 'Ars',
//     skills: ['1', '2'],
//     log: (id) => {
//         return `roleId ${id}`;
//     }
// }
//
// interface UserDictionary {
//     [index: number]: User
// }
//
// type ud = Record<number, User> // Появился недавно, синтаксический сахар для Словарей


// Optional

interface User {
    login: string,
    password?: string //опционально
}


// Unknown

/*async function getData() {
    try {
        await fetch('')
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message)
        }
    }
}


async function getDataForce() {
    try {
        await fetch('')
    }
    catch (error) {
        const e = error as Error

        console.log(e.message)
    }
}*/

// Never
/*

function generateError(message: string): never { // never - никогда не возвращаем значение из функции
    throw new Error(message)
}

type paymentAction = 'refund' | 'checkout'

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //.....
            break;
        case 'checkout':
            //......
            break;
        default:
            throw new Error('Нет такого action')
    }
}
*/


// Приведение типов
/*
interface User {
    name: string,
    email: string,
    login: string
}

const user: User = {
    name: 'Test',
    email: 'test@test.ru',
    login: 'test007'
}

// const user = {
//     name: 'Test',
//     email: 'test@test.ru',
//     login: 'test007'
// } as User

interface Admin {
    name: string,
    roleId: number
}

/!*
/!* нежелательно
const admin: Admin = {
    ...user,
    roleId: 1
}
*!/

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        roleId: 1
    }
}*/

// Type Guard

interface User {
    name: string,
    email: string,
    login: string
}

interface Admin {
    name: string,
    roleId: number
}

const user: User = {
    name: 'Test',
    email: 'test@test.ru',
    login: 'test007'
}

function logId(id: string | number) {
    if (typeof  id === 'string') {
        console.log(id)
    } else {
        console.log(id)
    }
}

// Type Guard функция

function  isString(x: string | number): x is string {
    return typeof x === 'string'
}

function isAdmin(user: User | Admin): user is Admin {
    return 'roleId' in user
}

function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).roleId !== undefined
}
function setRole(user: User | Admin) {
    if (isAdmin(user)) {
        user.roleId = 2
    } else {
        throw new Error('User is not Admin')
    }
}


