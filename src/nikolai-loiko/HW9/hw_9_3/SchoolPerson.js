class SchoolPerson {
  constructor(name, age, gender, status) {
    this._name = name;
    this._age = age;
    this._gender = gender;
    this._status = status;
  }
  get person() {
    return `${this._name}, ${this._status}`;
  }
}

export default SchoolPerson;
