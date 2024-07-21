'use strict';

function add(param_1: number, param_2: number): number {
    return param_1 + param_2
}
async function minus(param_1: number, param_2: number): Promise<number> {
    return param_1 - param_2
}
async function main(): Promise<void> {
    try {
        let a1 = add(1, 2)
        let b1 = minus(3, 4)
        let c1 = await minus(3, 4);
        console.log(a1, b1, c1);
    } catch (err) {
        console.error(err);
    }
}
main()

const user = {
    name: "Hu Ran",
    id: "231870261",
}
// console.log(user.age) has error, and can't be executed

let a: number
let b: string
let c: boolean
let num_arr: number[]
let string_arr: Array<string>
let obj: any // is equal to .js

function myString(param_1: number, param_2: string): string {
    return "I love Hu Ran."
}
console.log(myString(1, '1'))

export class example {
    name: string
    id: number
    createAt: Date

    constructor(name: string, id: number, createAt: Date) {
        this.name = name
        this.id = id
        this.createAt = createAt
    }

    public getName(): string {
        return this.name
    }
}
let student: example = new example("Hu Ran", 231870261, new Date())
console.log(student.getName())