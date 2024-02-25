//////////////////////// Union Types ///////////////////////////////
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


//////////////////////// Type Aliases /////////////////////////////////


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
//////////////////////// Intersection ///////////////////////////////

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

//////////////////////// Interfaces ///////////////////////////////

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


//////////////////////// Optional ///////////////////////////////

/*
interface User {
    login: string,
    password?: string //опционально
}*/


//////////////////////// Unknown ///////////////////////////////

/*
async function getData() {
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

//////////////////////// Never ///////////////////////////////
//
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


//////////////////////// Приведение типов ///////////////////////////////

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

//////////////////////// Type Guard ///////////////////////////////

/*interface User {
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
}*/

//////////////////////// Type Guard. Функция ///////////////////////////////
/*
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
*/

//////////////////////// Asserts ///////////////////////////////
/*

interface User {
    name: string
}

const a = {}

assertUser(a)
a.name = 'Test'

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {  // !!obj тоже самое, что  obj !== null
        return
    }

    throw new Error('No user')
}
*/

//////////////////////// Классы ///////////////////////////////
/*
class User {
    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(nameOrAge?: string | number, age?: number) {
        if (typeof nameOrAge === 'string') {
            this.name = nameOrAge
        } else if (typeof nameOrAge === 'number') {
            this.age = nameOrAge
        }
        if (typeof age === 'number') {
            this.age = age
        }
    }

    name: string
    age: number
}

const user = new User('Test')
const user2 = new User()
const user3 = new User(33)
const user4 = new User('test', 33)
*/


///////////////////// Классы. Методы /////////////////////

/*
enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number
    status: PaymentStatus = PaymentStatus.Holded
    createdAt: Date = new Date()
    updatedAt: Date

    constructor(id: number) {
        this.id = id
    }

    getTimePayment():number {
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Error Message')
        }

        this.status = PaymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

const payment = new Payment(1)
payment.unholdPayment()
console.log(payment)
const time = payment.getTimePayment()
console.log(time)
*/

///////////////////// Классы. Перегрузка методов /////////////////////


/*
class User {
    skills: string[]

    addSkill(skill: string)
    addSkill(skill: string[])
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills)
        } else {
            this.skills.push(...skillOrSkills)
        }
    }
}
*/


///////////////////// Классы. Getter и Setter /////////////////////

/*
class User {
    _login: string
    password: string

    set login(l: string) {
        this._login = `user-${l}`
    }
}

const user = new User()
user.login = 'myLogin'
console.log(user)
*/

///////////////////// Классы. Implements /////////////////////
/*
interface ILogger {
    log(...args): void
    error(...args): void
}

class Logger implements ILogger {
    error(...args: any[]): void {
        console.log(...args)
    }

    log(...args: any): void {
        console.log(...args)
    }

}


interface IPayable {
    pay(paymentId: number) : void
    price?: number
}

class User implements IPayable {
    pay(paymentId: number): void {
        /////
    }
    price?: number
}*/

///////////////////// Классы. Extends /////////////////////

{
    /*type PaymentStatus = 'new' | 'paid'

    class Payment {
        status: PaymentStatus = 'new'
        id: number

        constructor(id: number) {
            this.id = id
        }

        pay(): void {
            this.status = 'paid'
        }

    }


    class PersistedPayment extends Payment {
        constructor() {
            const id = Math.random()
            super(id);

        }
        databaseId: number
        paymentAt: Date

        save() {
            ///
        }

        override pay(date?: Date) {
            if (date) {
                this.paymentAt = date
            }
        }

    }*/
}


///////////////////// Классы. Видимость свойств /////////////////////
/*

class Vehicle {
    make: string
    private damages: string[]
    private _model: string
    protected run: number

    set model(m: string) {
        this._model = m
    }

    get model() {
        return this._model
    }

    addDamages(damage: string) {
        this.damages.push(damage)
    }
}

class EuroTrack extends Vehicle {
    setRun(km: number) {
        this.run = km
    }
}
*/

///////////////////// Классы. this /////////////////////

/*class Payment {
    private date: Date = new Date()

    getDate(this: Payment) {
        return this.date
    }

    getDatArrow = () => {
        return this.date
    }
}

const p = new Payment()
const user = {
    id: 1,
    paymentDate: p.getDate.bind(p)
}

console.log(user.paymentDate())*/

///////////////////// Классы. Типизация this /////////////////////
/*
class UserBuilder {
    name: string

    setName(name: string): this {
        this.name = name
        return this
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof AdminBuilder
    }
}

class AdminBuilder extends UserBuilder{
    roles: string[]
}

const res = new UserBuilder().setName('Test')
const res2 = new AdminBuilder().setName('admin')

let user: UserBuilder | AdminBuilder = new UserBuilder()

if (user.isAdmin()) {
    console.log(user)
} else {
    console.log(user)
}*/

///////////////////// Классы. Абстрактные классы /////////////////////
/*

abstract class Controller {
    abstract handle(req: any): void

    handleWithLogs(req: any) {
        console.log('start')
        this.handle(req)
        console.log('end')
    }
}

class UserController extends Controller {
    override handle(req: any) {
        console.log(req)
    }
}

// new Controller() - error
const c = new UserController()
c.handleWithLogs('Request')
*/

///////////////////// Generics. Встроенные generic /////////////////////
/*
const num: Array<number> = [1, 2, 3]

const check: Record<string, boolean> = {
    drive: true,
    kpp: false
}

function logMiddleware<T>(data: T): T {
    console.log(data)

    return data
}

const log1 = logMiddleware<number>(10)
const log2 = logMiddleware<boolean>(true)
const log3 = logMiddleware<string>('inostranka')

function getSplitedHalf<T>(data: Array<T>): Array<T> {
    const l = data.length / 2

    return data.slice(0, l)
}*/

///////////////////// Generics. ограничения generic /////////////////////

/*
class Vehicle {
    run: number
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
    vehicle.run = vehicle.run / 0.62

    return vehicle
}

class LCV extends Vehicle {
    capacity: number
}
*/


///////////////////// Generics. Классы  /////////////////////
/*

class Resp<D, E> {
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) {
            this.data = data
        }

        if (error) {
            this.error = error
        }
    }
}

const res = new Resp<string, number>('data')

class HTTPResp extends Resp<string, number> {
    code: number

    setCode(code: number) {
        this.code = code
    }
}
*/

///////////////////// Generics. Миксины  /////////////////////
/*
type Constructor = new (...args: any[]) => {}
type GConstructor<T = {}> = new (...args: any[]) => T

class List {
    constructor(public items: string[]) {}
}

class Accordion {
    isOpened: boolean
}

type ListType = GConstructor<List>
type AccordionType = GConstructor<Accordion>

class ExtendedListClass extends List {
    first() {
        return this.items[0]
    }
}

class AccordionList {
    isOpened: boolean
    constructor(public items: string[]) {}
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0]
        }
    }
}

const list = ExtendedList(AccordionList)
const res = new list(['first', 'second'])
console.log(res.first())*/


///////////////////// Keyof  /////////////////////

/*
interface IUser {
    name: string
    age: number,
    dog: string
}

type KeysOfUser = keyof IUser

const key: KeysOfUser = 'age'

function getValue<T>(obj: T, key: keyof T): T[keyof T] {
    return obj[key]
}

const user: IUser = {
    name: 'Валера',
    age: 20,
    dog: 'Kunica'
}

console.log(getValue(user, 'dog'))
*/


/////////////////////  Indexed Access Types  /////////////////////
/*
interface Role {
    name: string
}

interface User {
    name: string
    roles: Role[]
}

const user: User = {
    name: 'Test',
    roles: []
}

const nameUser = user['name']

type rolesType = User['roles']

type roleType = User['roles'][number]

const roles = ['admin', 'user', 'super-user'] as const
type roleTypes = typeof roles[number]*/

/////////////////////  Conditional Types  /////////////////////
/*

interface HTTPResponse<T extends 'success' | 'failed'> {
  code: number,
  data: T extends 'success' ? string : Error
}
const suc: HTTPResponse<'success'> = {
    code: 200,
    data: 'done'
}

const err: HTTPResponse<'failed'> = {
    code: 400,
    data: new Error()
}

class User {
    id: number
    name: string
}

class UserPersistend extends User {
    dbId: string
}

type UserOrUserPersistend<T extends string | number> = T extends number ? User : UserPersistend

function getUser<T extends string | number>(id: T): UserOrUserPersistend<T> {
    if (typeof id === 'number') {
        return new User() as UserOrUserPersistend<T>
    } else {
        return new UserPersistend()
    }
}

const res = getUser(1)
const res2 = getUser('str')
*/

/////////////////////  Infer  /////////////////////
/*
function runTransaction(transaction: {fromTo: [string, string]}) {
    console.log(transaction)
}

type GetFirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const transaction: GetFirstArg<typeof runTransaction> = {
    fromTo: ['1', '2']
}*/


/////////////////////  Mapped Types  /////////////////////

/*
type Modifier = 'read' | 'update' | 'create'

type UserRoles = {
    customers?: Modifier,
    projects?: Modifier,
    adminPanel?: Modifier
}

type UserAccess = {
    customers?: boolean,
    projects?: boolean,
    adminPanel?: boolean
}

type ModifiedToAccess<Type> = {
    +readonly [Property in keyof Type as `canAccess${string & Property}`]-?: boolean
}

type UserAccess2 = ModifiedToAccess<UserRoles>
*/

/////////////////////   Template Literal Types  /////////////////////
/*
type ReadOrWrite = 'read' | 'write'
type Bulk = 'bulk' | ''

type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`

type ErrorOnSuccess = 'success' | 'error'

type ResponseT = {
    result: `http${Capitalize<ErrorOnSuccess>}`
}

const a2: ResponseT = {
    result: 'httpSuccess'
}*/

/////////////////////   Partial, Required, Readonly /////////////////////

interface User {
    name: string
    age?: number
    email: string
}

type partial = Partial<User>
type required = Required<User>
type readonly = Readonly<User>
type RequiredOrReadonly = Readonly<Required<User>>
