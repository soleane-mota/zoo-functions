const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const countEachGroup = { adult: 0, child: 0, senior: 0 };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      countEachGroup.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      countEachGroup.adult += 1;
    } else {
      countEachGroup.senior += 1;
    }
  });

  return countEachGroup;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const entrantsArray = Object.values(countEntrants(entrants));
  const { adult, senior, child } = prices;
  const pricesInOrder = [adult, child, senior];
  const totalPrice = entrantsArray.map((amont, index) => amont * pricesInOrder[index])
    .reduce((acc, curr) => acc + curr, 0);

  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
