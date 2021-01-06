export default class Character {
    private readonly name: string;
    private readonly age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    toString(): string {
        return `Name: ${this.name} and Age ${this.age}`;
    }
}