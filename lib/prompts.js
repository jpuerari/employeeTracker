const start = [
  {
    name: 'task',
    message: 'What would you like to do?',
    type: 'list',
    choices: ['Add an employee', 'Add a job role', 'Add a department', 'View Employees', 'View job roles', 'View departments']
  }
];

const employeeQuestions = [
  {
   name: 'employeeFullName',
   Message: 'What is the employees full name?',
   type: 'input',
  },
];


const roleQuestions = [
 {
  name: 'roleName',
  message: 'What is the name of the new role?',
  type: 'input',
 },
 {
   name: 'roleSalary',
   message: 'What is the starting salary for this role?',
   type: 'input',
 },
 {
  name: 'departmentID',
  message: 'What is the department ID for this role?',
  type: 'input',
}
];


const departmentQuestions = [
  {
    name: 'departmentName',
    message: 'What is the name of the new department?',
    type: 'input',
  }
];



module.exports = { start, employeeQuestions, roleQuestions, departmentQuestions, };
