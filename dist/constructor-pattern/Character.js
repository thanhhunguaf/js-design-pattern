"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    toString() {
        return `Name: ${this.name} and Age ${this.age}`;
    }
}
exports.default = Character;
