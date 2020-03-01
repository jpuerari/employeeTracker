USE employeeTracker_db;

INSERT INTO department
(name)
VALUES
  ('Localization Engineer'),
  ('In-house Translator')
  ('Project Manager')
  ('Clerk');

  INSERT INTO role
  (title, salary, department_id)
  VALUES
  ('Senior Localization Engineer', 100000, 1),
  ('In-house Spanish>English Translator', 60000, 2),
  ('Translation Project Manager', 50000, 3),
  ('Desk Clerk', 40000, 4);

  INSERT INTO employees
  (first_name, last_name, role_id),
  ('Mark', 'Anthony', 1),
  ('Allen' 'Smith', 2),
  ('Jane' 'Doe', 3),
  ('Carry' 'Johnson', 4);