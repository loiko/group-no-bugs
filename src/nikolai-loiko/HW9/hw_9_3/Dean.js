import Teacher from "./Teacher.js";

class Dean extends Teacher {
  constructor(name, age, gender, workingHours) {
    super(name, age, gender, workingHours);
    this._status = "Dean";
  }

  getSalary() {
    return super.getSalary() * 2 + super.getBaseSalary();
  }
}

export default Dean;
