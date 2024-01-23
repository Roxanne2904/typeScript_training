"use strict";
/* global console */
// Problème : Triez un tableau d'objets
// Vous avez un tableau d'objets représentant des personnes, chaque objet ayant les propriétés suivantes : nom (string), âge (number) et score (number). Vous devez trier le tableau dans l'ordre suivant :
// D'abord, par ordre alphabétique du nom (ascendant).
// Ensuite, par âge croissant.
// Enfin, par score décroissant.
// Vous pouvez utiliser des méthodes de tri JavaScript ou implémenter votre propre algorithme de tri.
// Voici un exemple de tableau d'objets :
var Sort;
(function (Sort) {
	Sort["AGE"] = "age";
	Sort["NAME"] = "name";
	Sort["SCORE"] = "score";
})(Sort || (Sort = {}));
const people = [
	{ name: "Alice", age: 60, score: 90 },
	{ name: "Charlie", age: 57, score: 80 },
	{ name: "Roxanne", age: 25, score: 85 },
	{ name: "Bob", age: 75, score: 85 },
];
function sortBy(array, sortBy, { reverse }) {
	const sortedArray = array.sort((a, b) =>
		a[sortBy].toString().localeCompare(b[sortBy].toString())
	);
	if (reverse) return [...sortedArray].reverse();
	return [...sortedArray];
}
console.log("ici", sortBy(people, Sort.AGE, { reverse: true }));
function sort(array) {
	return array.sort((a, b) => {
		const compareByName = a.name.localeCompare(b.name);
		const compareByAge = a.age - b.age;
		const compareByScore = a.score - b.score;
		if (compareByName !== 0) return compareByName;
		if (compareByAge !== 0) return compareByAge;
		if (compareByScore !== 0) return compareByScore;
		return 0;
	});
}
console.log(sort(people));
