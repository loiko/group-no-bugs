import SchoolPerson from "./SchoolPerson.js";

class Employee extends SchoolPerson {
  static BASE_SALARY = 120;

  constructor(name, age, gender, status) {
    super(name, age, gender, status);
  }

  getBaseSalary() {
    return Employee.BASE_SALARY;
  }
  getSalary() {
    return Employee.BASE_SALARY;
  }
}

export default Employee;
