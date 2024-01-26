"use strict";

console.log("-------------");
console.log("-------------");
console.log("TEST_02");
console.log("-------------");
console.log("-------------");
// Question 1: Déclarez un type 'PersonBis' avec les propriétés suivantes: nom (string), âge (number), et email (string).
const personBis = {
	nom: "hello",
	age: 67,
	email: "mail@MediaList.fr",
};
console.log("", personBis);
// Question 2: Créez une interface 'Employee' qui étend le type 'PersonBis' et ajoute une propriété 'poste' de type string.
const employee = {
	nom: "hello",
	age: 67,
	email: "mail@MediaList.fr",
	poste: "baker",
};
console.log("employee", employee);
// Question 3: Implémentez une fonction 'creerPersonne' qui prend en paramètre un nom, un âge et un email, et renvoie un objet de type 'PersonBis'.
const createPerson = (age, name, email) => {
	return { age: age, nom: name, email: email };
};
function createPersonBis(arg) {
	return arg;
}
console.log(createPerson(34, "Roxanne", "mail@mail.fr"));
console.log(
	createPersonBis({
		age: 45,
		nom: "Benjamin",
		email: "mail@mail.fr",
	})
);
// Question 4: Implémentez une fonction 'creerEmploye' qui prend en paramètre un nom, un âge, un email et un poste, et renvoie un objet de type 'Employee'.
function createEmployee(arg) {
	return arg;
}
console.log(
	createEmployee({
		nom: "Jocelyne",
		email: "mail@mail.com",
		poste: "dévelopeuse",
		age: 34,
	})
);
// Question 5: Déclarez un tableau de personnes (au moins 3 personnes).
const personArray = [
	{ nom: "Hélène", age: 34, email: "mail@mail.fr" },
	{ nom: "Ben", age: 67, email: "mail@mail.fr" },
	{ nom: "Tom", age: 89, email: "mail@mail.fr" },
];
console.log("personArray", personArray);
// Question 6: Implémentez une fonction 'filtrerParAge' qui prend en paramètre un tableau de personnes et un âge minimum, et renvoie un tableau de personnes dont l'âge est supérieur ou égal à l'âge minimum.
function filterPerAge(array, ageMin) {
	return array.filter((person) => person.age >= ageMin);
}
console.log("filterPerAge", filterPerAge(personArray, 55));
// Question 7: Déclarez une classe 'Calculatrice' avec une méthode 'ajouter' qui prend deux nombres en paramètre et renvoie leur somme.
class Calculatrice {
	constructor(number1, number2) {
		this.number1 = number1;
		this.number2 = number2;
	}
	add() {
		return this.number1 + this.number2;
	}
}
console.log("Calculatrice", new Calculatrice(3, 5).add());
// Question 9 (Bonus): Qu'est-ce que le "duck typing" en TypeScript ?
// TODO: Réponse ici
