const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesId = [];
  data.species.forEach((animal) => {
    ids.forEach((id) => (id === animal.id ? speciesId.push(animal) : null));
  });
  return speciesId;
}

module.exports = getSpeciesByIds;
