import Student from "./Student.js";
import Teacher from "./Teacher.js";
import Dean from "./Dean.js";
import Principal from "./Principal.js";

const principal = new Principal("Victor", 43, "male");
console.log(principal);
console.log(principal.getSalary());
console.log(principal.person);

const dean = new Dean("Maria", 32, "female", 56);
console.log(dean.getSalary());
console.log(dean.person);

const teacher = new Teacher("Tony", 25, "male", 32);
console.log(teacher.getSalary());
console.log(teacher.person);

const student1 = new Student("Olya", 19, "female", 2, "doctor", 5);
console.log(student1.person);
const student2 = new Student("Petia", 20, "male", 2, "doctor", 5);
const student3 = new Student("Vasya", 20, "male", 2, "doctor", 3);
console.log(Student.getValedictorians());
