import SchoolPerson from "./SchoolPerson.js";

class Student extends SchoolPerson {
  static students = [];

  constructor(name, age, gender, studyYear, major, gpa) {
    super(name, age, gender, "Student");
    this._studyYear = studyYear;
    this._major = major;
    this._gpa = gpa;
    this._status = "Student";
    Student.students.push(this);
  }

  static getBestGPA() {
    return Math.max(...Student.students.map((s) => s._gpa));
  }

  static getStudentsWithBestGPA(bestGPA) {
    return Student.students.filter((student) => student._gpa === bestGPA);
  }

  static getValedictorians() {
    if (Student.students.length === 0) {
      return "No students available";
    }
    const bestGPA = Student.getBestGPA();
    const valedictorians = Student.getStudentsWithBestGPA(bestGPA);
    return (
      "Valedictorians: " +
      valedictorians.map((student) => student._name).join(", ") +
      `, with GPA: ${bestGPA}`
    );
  }
}

export default Student;
