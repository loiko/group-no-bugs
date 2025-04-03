//Дополнение к задаче №2 из предыдущего домашнего задания

// Создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
// Настройте конструктор экземпляров объекта Square так, чтобы свойству name автоматически 
// присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. 
// Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
// Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, 
//  вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.

class Shape {
    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        let result = this.sideLength * this.sides
        console.log(result);
    }
}
class Square extends Shape {
    constructor(sideLength) {
        super("square", 4, sideLength)
    }
    calcArea() {
        let result1 = this.sideLength * this.sideLength;
        console.log(result1);
    }
}

const square = new Square(5);
square.calcPerimeter();
square.calcArea();
