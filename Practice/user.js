export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

export function printName(user) {
    console.log(`Users name is ${user.name}`)
}

export function printAge(user) {
    console.log(`Users is ${user.age} years olds`)
}
