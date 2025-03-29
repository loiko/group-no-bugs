// Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. 
// За сколько дней она доползет до вершины стены.

const wall = 5;
const dayTrip = 3;
const nightTrip = -2;
let currentTrip;
let countOfDays = 1;

if (dayTrip >= wall) {                                                                   // ползет 1-й день
    console.log(`You reached the top in ${countOfDays} day!!!`);                        
}
else {
    currentTrip = dayTrip + nightTrip;                                                  // путь = 1 день + 1 ночь    

    if (currentTrip >= wall) {
        console.log(`You reached the top in ${countOfDays} days!!!`);
    }
    else {
        console.log(`The top is not reached in ${countOfDays} day, you'll have to crawl some more`);

        countOfDays++;                                                                  // добавляем еще 1 день
        currentTrip += dayTrip;                                                         // путь = 2 дня + 1 ночь
  
        if (currentTrip >= wall) {
            console.log(`You reached the top in ${countOfDays} days!!!`);
        }
        else {
            console.log(`The top is not reached in ${countOfDays} day, you'll have to crawl some more`);

            countOfDays++;
            currentTrip += dayTrip + nightTrip;

            if (currentTrip >= wall) {
                console.log(`You reached the top in ${countOfDays} days!!!`);
            }
            else console.log(`The top is not reached in ${countOfDays} day, you'll have to crawl some more`);
        }
    }
}