const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const findFirstAnimalId = employees.find((employee) => employee.id === id).responsibleFor
    .find((firstId) => firstId);
  const animalList = species.find((specie) => specie.id === findFirstAnimalId).residents
    .sort((a, b) => b.age - a.age).find((oldest) => oldest);
  return Object.values(animalList);
}

module.exports = getOldestFromFirstSpecies;
