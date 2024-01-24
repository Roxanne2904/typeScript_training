// Problème : Filtrer un tableau d'objets par type de propriété

// Vous avez un tableau d'objets, chacun ayant diverses propriétés.

// Vous devez créer une fonction générique appelée filterByType qui prend en entrée le tableau d'objets,

// une clé de propriété et une valeur cible, et renvoie un tableau contenant uniquement
// les objets qui ont la propriété spécifiée égale à la valeur cible.

// La fonction doit fonctionner avec différents types de propriétés et de valeurs.

type ObjectWithProperties<T> = {
	[K in keyof T]: unknown;
};

function filterByType<T extends ObjectWithProperties<T>>(
	array: T[],
	key: keyof T,
	value: T[keyof T]
): Record<string, string | T[]> {
	const filteredCar = array.filter((element: T) => element[key] === value);
	if (filteredCar.length === 0)
		return { response: filteredCar, message: "Nothing has been founded" };
	return { response: filteredCar, message: "it has been founded :)" };
}

interface Car {
	name: string;
	age: number;
	model: string;
}

const cars: Car[] = [
	{ name: "fiesta", age: 5, model: "ford" },
	{ name: "aucuneIdée", age: 10, model: "dacia" },
	{ name: "pfff", age: 2, model: "ferrari" },
	{ name: "saisPas", age: 7, model: "renaud" },
];

const filterCars = filterByType(cars, "age", 5);

console.log("filterCars:", filterCars);
