// Type 1
function CharacterWithJS(name, age) {
    this.name = name;
    this.age = age;

    this.toString = function () {
        return `Name: ${name} and Age ${age}`;
    }
}

// Type 2
function CharacterWithJS();
CharacterWithJS.name = "Kun";
CharacterWithJS.age = 12;
CharacterWithJS.toString = function () {
    return `Name: ${this.name} and Age ${this.age}`;
}

// Type 3 with prototypes
function CharacterWithJS();
CharacterWithJS.prototype.name = "Kun";
CharacterWithJS.prototype.age = 12;
CharacterWithJS.prototype.toString = function () {
    return `Name: ${this.name} and Age ${this.age}`;
}

/*
* And so, how to difference between constructor pattern and prototype pattern?
*
* - With constuctor: you will create a new instance of everything
* and importantly any change made to the instance it will only affect this not the others
*
* - With prototype: When you create a new object using the prototype it will reuse the logic
* and any change to the prototype chain will affect everyone else
*
* Explantion: https://tanzu.vmware.com/content/blog/javascript-constructors-prototypes-and-the-new-keyword
* or https://stackoverflow.com/questions/5837795/javascript-prototypes-and-instance-creation
* */