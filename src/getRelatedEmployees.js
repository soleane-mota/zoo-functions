const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmployees = data.employees
      .filter((employee) => employee.managers.includes(managerId));
    return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!').message;
}

module.exports = { isManager, getRelatedEmployees };
