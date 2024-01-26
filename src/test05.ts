// Partie 1: Génériques et Types Conditionnels

// Définir une interface générique appelée 'Container' qui prend deux types génériques,
// 'T' et 'U', où 'U' est une propriété optionnelle et doit être de type string.

interface Container<T, U extends string = string> {
	value: T;
	label?: U;
}

// Écrire une fonction générique appelée 'mergeContainers' qui prend deux objets de type
// 'Container' et renvoie un nouvel objet de type 'Container' avec les propriétés fusionnées.
// Si les deux objets ont une propriété 'label', concaténez les labels séparés par un tiret.
// Assurez-vous que la fonction est correctement typée.

function mergeContainers<T, U extends string>(
	arg1: Container<T, U>,
	arg2: Container<T, U>
): Container<T, U> | Container<T> {
	const bothHasLabel = arg1.label && arg2.label;
	const atLeastOneHasLabel = arg1.label || arg2.label;

	if (!atLeastOneHasLabel)
		return {
			value: arg1.value,
		};

	return {
		value: arg1.value,
		label: bothHasLabel ? `${arg1.label}-${arg2.label}` : atLeastOneHasLabel,
	};
}

console.log(mergeContainers);

// Partie 2: Interfaces avancées et Génériques

// Définir une interface appelée 'Filter' qui prend deux types génériques,
// 'T' et 'U', où 'U' est une fonction qui prend un argument de type 'T' et renvoie un booléen.

type FilterFn<T> = (arg: T) => boolean;

interface Filter<T, U extends FilterFn<T>> {
	dataArray: T[];
	filterFn: U;
}

// Écrire une fonction générique appelée 'filterArray' qui prend un tableau de type 'T'
// et un objet de type 'Filter<T, U>' et renvoie un nouveau tableau filtré en utilisant
// la fonction de filtre spécifiée dans l'objet 'Filter'.

function filterArray<T, U extends FilterFn<T>>(filter: Filter<T, U>): T[] {
	return filter.dataArray.filter(filter.filterFn);
}

// Exemple d'utilisation:

interface EvenFilter<T> {
	applyFilter: (numbers: T[]) => T[];
	filterFn: (num: T) => boolean;
}

const evenNumberFilter: EvenFilter<number> = {
	applyFilter: (numbers: number[]) =>
		filterArray<number, FilterFn<number>>({
			dataArray: numbers,
			filterFn: evenNumberFilter.filterFn,
		}),

	filterFn: (num: number) => num % 2 === 0,
};

// Définir une fonction de filtre pour les nombres pairs
const numbers: number[] = [1, 2, 4, 7, 9, 10, 12, 69, 70];

const result = evenNumberFilter.applyFilter(numbers);
console.log("result:", result);

// Test de la fonction de filtre avec un tableau de nombres
