//3. Креативное задание. Создать структуру школы.

// В школе есть люди, студенты, учителя, декан, директор школы. 
// У каждого свои свойства, некоторые повторяющиеся, как например имя, возраст, пол, можно больше.
// Но так же есть и не повторяющиеся, например, 
// студенты - номер курса (1-ый год, 2-й год, и т.д.)
// студенты - специальность (major)
// студенты - средний бал (gpa, от 1 до 4, 1 - студент плохо учиться, 4 - очень хорошо)
// учителя - имеют зарплату
// декан - зарплата в 2 раза больше чем у учителей, плюс годовой бонус в размере 1 зарплаты
// учитель и декан - часы работы
// директор школы - зарплата в 1.5 раза больше чем у декана, плюс годовой бонус в размере 2х зарплат
// Использовать 4 принципа ООП
// Вывести на печать имена и позицию каждого человека
// Вывести на печать зарплату директора школы
// Вывести на печать имя студента valedictorian (лучший студент школы, студент с лучшим gpa)

class Persons {
    constructor(fullName, age, gender) {
        this.fullName = fullName;
        this.age = age;
        this.gender = gender;

        if (new.target === Persons) {                              // делаем класс абстрактным - нельзя от него 
            throw new Error("This class can't be instantiated");   // создать объект
        }
    }
    showPosition() {                          // переопределяем этот метод в каждом классе (полиморфизм)
        return "Person";
    }
    showInfo() {                                                       // выводим имя и позицию 
        console.log(`${this.fullName} - ${this.showPosition()}`);
    }
}
class Students extends Persons {
    constructor(fullName, age, gender, course, major, gpa) {
        super(fullName, age, gender);
        this.course = course;
        this.major = major;
        this.gpa = gpa;
    }
    showPosition() {
        return "Student";
    }
}
class Employees extends Persons {                              
    baseSalary = 20;
    constructor(fullName, age, gender, hours, role) {
        super(fullName, age, gender);
        this.hours = hours;
        this.role = role;
    }
    showPosition() {
        return this.role;
    }
    #calculateMonthSalary() {                                   // вычисляет зарплату за месяц
        switch (this.role) {
            case "Dean": return this.baseSalary
                * this.hours * 2;
            case "Director": return this.baseSalary
                * this.hours * 3;
            default: return this.baseSalary
                * this.hours;
        }
    }
    #calculateYearSalary() {                                    // вычисляет зарплату за год 
        switch (this.role) {
            case "Dean": return this.#calculateMonthSalary() * 13;
            case "Director": return this.#calculateMonthSalary() * 14;
            default: return this.#calculateMonthSalary() * 12;
        }
    }
    getYearSalary() {
        return this.#calculateYearSalary();                     // выводит зарплату за год 
    }
}

const people = [                                                            // создала список людей
    new Students("Lisa Wilson", 18, "Female", 2, "Math", 3.8),
    new Students("Bob Yang", 20, "Male", 4, "Physics", 4.0),
    new Students("Michael Gross", 19, "Male", 3, "Physics", 3.5),
    new Employees("John Kudrou", 40, "Male", 150, "Teacher"),
    new Employees("Peter Benson", 45, "Male", 150, "Dean"),
    new Employees("Anna Terner", 51, "Female", 150, "Director")
];

people.forEach(el => el.showInfo());   // Выводит имена и позицию каждого человека

const director = people.find(el => el.role === "Director");                 // выводит годовую зарплату директора
console.log(`Director's yearly salary: ${director.getYearSalary()} EUR`);

const students = people.filter(el => el.showPosition() === "Student")  // создает массив объектов-студентов 
    .reduce((best, el) => (best.gpa > el.gpa ? best : el));            // выбирает из студентов лучшего по gpa
console.log(`Valedictorian: ${students.fullName} with GPA: ${students.gpa}`);

console.log(people[0].showPosition());
console.log(people[4].getYearSalary());

const persons = new Persons("Tina Holms", 35, "female"); // выдаст ошибку, т.к. класс Persons - абстрактный
