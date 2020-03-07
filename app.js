const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
// const { createEmployee, createRole, createDepartment } = require('./lib/db-items');

// import arrays of questions for inquirer prompts
const { start, createEmployee, departmentQuestions, roleQuestions } = require('./lib/prompts');

// function to start prompt, defined to be async
const startQuestions = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const { task } = await inquirer.prompt(start);
  console.log(task)
  // depending on the answer, do an action
  if (task === 'Add an employee') {
    await includeEmployee();
  } else if (task === 'Add a department') {
    console.log(":^)")
    await includeDepartment();
   } else if (task === 'Add a job role') {
      await addJobRole();
   } else if (task === 'View Employees') {
     await viewEmployeeList();
   } else if (task === 'View job roles') {
     await viewJobRoles();
   } else if (task === 'View departments') {
    await viewDepartments();
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

async function viewDepartments() {
  connection.query('SELECT * FROM department',  (err, res) => {
    console.table(res)
    if(err) throw err;
    startQuestions();
  })
};

async function viewJobRoles() {
  connection.query('SELECT * FROM role',  (err, res) => {
    console.table(res)
    if(err) throw err;
    startQuestions();
  })
};

async function viewEmployeeList() {
  connection.query('SELECT * FROM employee',  (err, res) => {
    console.table(res)
    if(err) throw err;
    startQuestions();
  })
};

// function to create a new department
async function includeDepartment() {
  const data = await inquirer.prompt(departmentQuestions);
  console.log(data)

  connection.query('INSERT INTO department SET ?', 
  {name: data.departmentName}, 
  (err, createItemRes) => {
    if(err) throw err;
    startQuestions();
  })
}
  

// function to create a new role
async function addJobRole() {
  const data = await inquirer.prompt(roleQuestions);
  console.log(data)
  connection.query('INSERT INTO role SET ?', 
  {
    title: data.roleName,
    salary: data.roleSalary,
    department_id: data.departmentID
  }, 
  (err, createItemRes) => {
    if(err) throw err;
    startQuestions();
  })
}



// connect to the db and start up auction
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to DB');
  startQuestions();
});

// module.exports = startQ;