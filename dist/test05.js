"use strict";
// Partie 1: Génériques et Types Conditionnels
// Écrire une fonction générique appelée 'mergeContainers' qui prend deux objets de type
// 'Container' et renvoie un nouvel objet de type 'Container' avec les propriétés fusionnées.
// Si les deux objets ont une propriété 'label', concaténez les labels séparés par un tiret.
// Assurez-vous que la fonction est correctement typée.
function mergeContainers(arg1, arg2) {
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
// Écrire une fonction générique appelée 'filterArray' qui prend un tableau de type 'T'
// et un objet de type 'Filter<T, U>' et renvoie un nouveau tableau filtré en utilisant
// la fonction de filtre spécifiée dans l'objet 'Filter'.
function filterArray(filter) {
    return filter.dataArray.filter(filter.filterFn);
}
const evenNumberFilter = {
    applyFilter: (numbers) => filterArray({
        dataArray: numbers,
        filterFn: evenNumberFilter.filterFn,
    }),
    filterFn: (num) => num % 2 === 0,
};
// Définir une fonction de filtre pour les nombres pairs
const numbers = [1, 2, 4, 7, 9, 10, 12, 69, 70];
const result = evenNumberFilter.applyFilter(numbers);
console.log("result:", result);
// Test de la fonction de filtre avec un tableau de nombres
