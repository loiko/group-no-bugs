//Дополнение к задаче №2 из предыдущего домашнего задания
// Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, 
//вычисляющий площадь квадрата. 


class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        return `Perimeter of ${this.name} is ${this.sides * this.sideLength}`;
    }

}
// const square = new Shape("square", 4, 5);
// square.calcPerimeter();

// const p = new Shape("triangle", 3, 3);
// console.log(p.calcPerimeter());


// class Square extends Shape {
//     constructor(name, sides, sideLength) {
//     super(name, sides, sideLength);
// }
//     calcArea() {
//         return `Area of ${this.name} is ${this.sideLength ** 2}`;
//     }
// } 

// const square = new Square("square", 4, 5);
// console.log(square.calcArea());


// 2. Настройте конструктор экземпляров объекта Square так, 
//чтобы свойству name автоматически присваивалось значение square, 
//а sides для свойства автоматически устанавливалось значение 4. 
//Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.

// class Square extends Shape {
//     constructor(sideLength) {
//     super("square", 4, sideLength);
// }
//     calcArea() {
//         return `Area of ${this.name} is ${this.sideLength ** 2}`;
//     }
// } 

// const square = new Square(5);
// console.log(square.calcArea());


// 3. Создайте экземпляр класса Square, вызываемого square с соответствующими 
//значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), 
//чтобы показать, что он работает нормально.

class Square extends Shape {
    constructor(sideLength) {
    super("square", 4, sideLength);
}
    calcArea() {
        return `Area of ${this.name} is ${this.sideLength ** 2}`;
    }
} 

const square = new Square(5);
console.log(square.calcArea());
console.log(square.calcPerimeter());