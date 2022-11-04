const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const specie = {};
  species.forEach(({ name, residents }) => {
    specie[name] = residents.length;
  });
  if (animal !== undefined) {
    const animalData = species.find(({ name }) => name.includes(animal.specie));
    if (animal.sex === 'male') {
      const male = animalData.residents.filter(({ sex }) => sex === 'male').length;
      return male;
    }
    if (animal.sex === 'female') {
      const female = animalData.residents.filter(({ sex }) => sex === 'female').length;
      return female;
    }
    return animalData.residents.length;
  }
  return specie;
}

// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
