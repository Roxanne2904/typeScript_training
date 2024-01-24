"use strict";
// Problème : Filtrer un tableau d'objets par type de propriété
function filterByType(array, key, value) {
    const filteredCar = array.filter((element) => element[key] === value);
    if (filteredCar.length === 0)
        return { response: filteredCar, message: "Nothing has been founded" };
    return { response: filteredCar, message: "it has been founded :)" };
}
const cars = [
    { name: "fiesta", age: 5, model: "ford" },
    { name: "aucuneIdée", age: 10, model: "dacia" },
    { name: "pfff", age: 2, model: "ferrari" },
    { name: "saisPas", age: 7, model: "renaud" },
];
const filterCars = filterByType(cars, "age", 5);
console.log("filterCars:", filterCars);
