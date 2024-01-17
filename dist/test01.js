"use strict";
/* global console */
// Quel est le type de données de la variable "age" ?
const age = 25; // number to be more specific is 25 type.
console.log("age:", `${age}: number`);
const person = {
    name: "John",
    age: 23,
};
console.log("person:", `${person}: {
	name: string,
	age: number,
}`);
// Écrivez une fonction appelée "add" qui prend deux paramètres de type nombre et renvoie leur somme.
const add = (arg1, arg2) => {
    return arg1 + arg2;
};
function add01(arg1, arg2) {
    return arg1 + arg2;
}
console.log("add function", add(23, 45));
console.log("add01 function", add01(67, 45));
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return `you've chosen a ${this.name}`;
    }
}
console.log("class Animal", new Animal("horse").name);
console.log("class Animal", new Animal("pig").makeSound);
// Écrivez une fonction générique appelée "reverseArray" qui prend un tableau de n'importe quel type et renvoie le tableau inversé.
function reverseArray(array) {
    return array.reverse();
}
const originalArray = [1, 2, 3, 4, 5, 6];
console.log("reverseArray", reverseArray([originalArray]));
// Utilisez les promesses pour simuler une opération asynchrone qui résout une chaîne de caractères après 2 secondes.
const simulatedAsyncOperation = () => new Promise((resolve) => {
    setTimeout(() => resolve("Opération asynchrone réussie après 2 secondes"), 2000);
});
console.log("simulatedAsyncOperation", simulatedAsyncOperation().then((result) => console.log(result)));
