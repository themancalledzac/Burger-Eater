# Burger-Eater


"SELECT employee.first_name AS 'First Name', employee.last_name, role.title, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.role_id;"
getEmployeesByDepartment() {
    return connection.query(
      "SELECT employee.first_name AS 'First Name', employee.last_name AS 'Last Name', employee.department AS 'Department' FROM employee LEFT JOIN role ON employee.role_id = role.role_id ORDER BY department desc"
    );
  },