// Используя switch, напишите программу перевода дней недели из цифр в названия (перевести дни 1-7 в Пон-Вос)

let day = 8;

switch (day) {

    case 1:
        console.log("1 - Monday");
        break;
    case 2:
        console.log("2 - Tuesday");
        break;
    case 3:
        console.log("3 - Wednesday");
        break;
    case 4:
        console.log("4 - Thursday");
        break;
    case 5:
        console.log("5 - Friday");
        break;
    case 6:
        console.log("6 - Saturday");
        break;
    case 7:
        console.log("7 - Sunday");
        break;
    default:
        console.log("The number is incorrect. Enter from 1 to 7 ");

}