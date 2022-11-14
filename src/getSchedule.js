const data = require('../data/zoo_data');

const { species, hours } = data;

function messegerHours(day) {
  if (hours[day].open !== 0) {
    return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
  }
  return 'CLOSED';
}

function exhibitionCondition(day) {
  const exhibition = species.filter((specie) => specie.availability
    .includes(`${day}`)).map((animal) => animal.name);
  if (exhibition.length === 0) {
    return 'The zoo will be closed!';
  }
  return exhibition;
}
function hoursForEachDay() {
  const hoursForEachAnimal = {};
  Object.keys(hours).forEach((day) => {
    hoursForEachAnimal[day] = {
      officeHour: messegerHours(day),
      exhibition: exhibitionCondition(day),
    };
  });
  return hoursForEachAnimal;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget && species.some((specie) => specie.name === scheduleTarget)) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  if (scheduleTarget && Object.keys(hours).includes(scheduleTarget)) {
    return { [scheduleTarget]: hoursForEachDay()[scheduleTarget] };
  }
  return hoursForEachDay();
}

module.exports = getSchedule;
