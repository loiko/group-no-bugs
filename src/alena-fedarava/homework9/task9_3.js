class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

class Student extends Person{
    constructor(name, age, gender, year, major, gpa){
        super(name, age, gender);
        this.year = year;
        this.major = major;
        this.gpa = gpa;
    }

    getPosition() {
        return `I am ${this.name} : Student`;
      }

}

class SchoolStaff extends Person{
    static rate = 100;
    #salary;

    constructor(name, age, gender, hours){
        super(name, age, gender);
        this.hours = hours;
        this.#salary = SchoolStaff.rate * this.hours;

        if (new.target === SchoolStaff) {
            throw new Error("Нельзя создать экземпляр абстрактного класса SchoolStaff напрямую.");
          }
    }
    get yearlySalary(){
        return this.#salary * 12;
    }

    getAnnualBonus() {
        throw new Error("Переопредели этот метод в подклассе.");
      }

}

class Teacher extends SchoolStaff{
    constructor(name, age, gender, hours){
        super(name, age, gender, hours);
        
    }

    getPosition() {
        return `I am ${this.name} : Teacher`;
      }
}

class Dean extends SchoolStaff{
    constructor(name, age, gender, hours){
        super(name, age, gender, hours);
    }

    get yearlySalary(){
        return super.yearlySalary * 2;
    }

    getPosition() {
        return `I am ${this.name} : Dean`;
      }

      getAnnualBonus() {
        return this.yearlySalary / 12;
      }

}

class Principal extends SchoolStaff{
    constructor(name, age, gender, hours){
        super(name, age, gender, hours);
        
    }

    get yearlySalary(){
        return super.yearlySalary * 3;
    }

    getAnnualBonus() {
        return this.yearlySalary / 6;
      }

    getPosition() {
        return `I am ${this.name} : Principal boss!`;
      }
}

const people = [
    new Student("Alice", 19, "W", 3, "Math", 3.9),
    new Student("Anna", 19, "W", 2, "Math", 4),
    new Student("Robert", 19, "M", 5, "History", 3.1),
    new Teacher("Bob", 35, "M", 40),
    new Dean("Clara", 45, "W", 160),
    new Principal("Daniel", 50, "M", 20),

  ];

  //Вывести на печать имена и позицию каждого человека
//   for (const p of people) {
//     console.log(p.getPosition());
//   }

//Вывести на печать зарплату директора школы + бонус
const principal = people[5];
// console.log(principal.yearlySalary + ' EUR per year')
// console.log(principal.getAnnualBonus()+ ' EUR')

//Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa)

const students = people.filter(p => p instanceof Student);
let temp = 0;
let bestStudent = '';
students.forEach(el =>{
    if (el.gpa > temp){
        temp = el.gpa;
        bestStudent = el.name;
    }
});
console.log(bestStudent);
