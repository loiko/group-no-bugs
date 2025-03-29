// Напишите следующую программу:
// У клиента должен быть выбор из двух (или трех) видов кофе (на ваш выбор).
// Дайте названия вашим видам кофе.
// Установите цену на кофе в зависимости от величины стаканчика (small, medium, large).
// Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для изменения рецепта и названия)
//  и его стоимость (в зависимости от размера стаканчика). 
// Компоненты кофе не влияют на стоимость.
// Используйте подходящую комбинацию условий - if, else if, else - для решения задачи.

const minPrice = 10;
const milk = "hot milk";
const coffee = "espresso";
let coffeeType = "Late";
let cupSize = "large";
let mlMilk = 50;
let mlCoffee = 50;
let totalPrice;

if (coffeeType == "Cappucchino") {
    mlCoffee *= 2;
}
else
    mlMilk *= 3;

if (cupSize == "small") {
    mlCoffee /= 2;
    mlMilk /= 2;
    totalPrice = minPrice;
}
else if (cupSize == "medium") {
    totalPrice = minPrice * 2;
}
else {
    mlCoffee *= 2;
    mlMilk *= 2;
    totalPrice = minPrice * 3;
}

console.log(`${coffeeType}: a ${cupSize} cup`);
console.log(`1. Take a ${cupSize} cup`);
console.log(`2. Pour ${mlCoffee} ml ${coffee} in it`);
console.log(`3. Add ${mlMilk} ml ${milk} in the cup`);
console.log(`Your ${coffeeType} is ready!`);
console.log(`The total price is ${totalPrice}`);