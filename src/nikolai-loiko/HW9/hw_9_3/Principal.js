import Dean from "./Dean.js";

class Principal extends Dean {
  constructor(name, age, gender) {
    super(name, age, gender);
    this._status = "Principal";
  }

  getSalary() {
    return super.getSalary() * 1.5 + super.getBaseSalary() * 2;
  }
}

export default Principal;
