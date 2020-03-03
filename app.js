const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
// const { createEmployee, createRole, createDepartment } = require('./lib/db-items');

// import arrays of questions for inquirer prompts
const { startQ, createEmployee, createDepartments, createRoles } = require('./lib/prompts');

// function to start prompt, defined to be async
const startQuestions = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const { task } = await inquirer.prompt(startQ);

  // depending on the answer, do an action
  if (task === 'Add an employee') {
    await includeEmployee();
  } else if (task === 'Add a department') {
    await includeDepartment();
   } else if (task === 'Add a job role') {
      await addJobRole();
   } else if (task === 'View Employees') {
     await viewEmployeeList();
   } else if (task === 'View job roles') {
     await viewJobRoles();
   }
   else {
    connection.end();
  }
};

// function to create a new employee
async function includeEmployee() {
  const { Name, RoleID, ManagerID} = await inquirer.prompt(createEmployee);

  createEmployee({
    name: fullName,
    role_id: roleID,
  })
};

// function to create a new department
async function includeDepartment() {
  const { Department } = await inquirer.prompt(createDepartments);
  createDepartment({
    departmentName: department,
  })
}
  

// function to create a new role
async function addJobRole() {
  const { Salary } = await inquirer.prompt(createRoles);
  createRole({
    departmentName: department,
  })
}



// connect to the db and start up auction
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startQuestions();
});

// module.exports = startQ;