const data = require('../data/zoo_data');

const { employees, species } = data;

function allEmployees() {
  const getEmployee = [];
  employees.forEach((employee) => {
    const getSpecies = species.filter(({ id }) => employee.responsibleFor
      .includes(id)).map((specie) => specie.name);
    const getLocations = species.filter(({ name }) => getSpecies.includes(name))
      .map((specie) => specie.location);
    getEmployee.push({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: getSpecies,
      locations: getLocations,
    });
  });
  return getEmployee;
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return allEmployees();
  }
  const getEmployee = employees.find((employee) => employee.firstName === obj.name || employee
    .lastName === obj.name || employee.id === obj.id);
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas').message;
  }
  const getSpecies = species.filter(({ id }) => getEmployee.responsibleFor
    .includes(id)).map((specie) => specie.name);
  const getLocations = species.filter(({ name }) => getSpecies.includes(name))
    .map((specie) => specie.location);
  return {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: getSpecies,
    locations: getLocations,
  };
}

module.exports = getEmployeesCoverage;
