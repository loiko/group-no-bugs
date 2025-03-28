import Employee from "./Employee.js";

class Teacher extends Employee {
  constructor(name, age, gender, workingHours) {
    super(name, age, gender, "Teacher");
    this._workingHours = workingHours;
  }

  getSalary() {
    return super.getSalary();
  }
}

export default Teacher;
