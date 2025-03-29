// Напишите простенький калькулятор (*, /, +, -). У вас должны быть две переменные для исходных чисел и одна для оператора. 
// В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль. 
// Проверьте ваш код с разными значениями, положительными, отрицательными, дробными и т.д.

let a = 2.5;
let b = 0;
let operator = "/";

switch (operator) {
    case "*":
        console.log(a * b);
        break;
    case "/":
        if (b !== 0) {
            console.log(a / b);
        }
        else console.log("You can't divide by 0 ");
        break;
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    default:
        console.log("The operator is incorrect");
        break;
}