// Напишите программу по согласованию отпуска в зависимости от месяца. 
// Если месяц “July” или “August”, то программа должна показать - “approved”, 
// если другие месяцы, то - “denied”.

// 1-й вариант ----------------------------------------------
let month = "October";

if (month == "August" || month == "July") {
    console.log("approved");
}
else
    console.log("denied");

// 2-й вариант---------------------------------------------
let month1 = "August"

let resolution = (month1 == "August" || month1 == "July") ? "approved" : "denied";
console.log(resolution);

