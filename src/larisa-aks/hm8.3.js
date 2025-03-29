class Employee{
    constructor(name, age, position, salary){
        this.name1 = name;
        this.age1 = age;
        this.position1 = position;
        this.salary1 = salary;
    }
get age1(){
    return this._age;
}
set age1(newAge){
    if (typeof newAge === "number" && newAge > 0){
        this._age = newAge
    }else{
        console.log("Incorrect age");   
    };
}

get position1(){
    return this._position;
}
set position1(newPosition){
    if (typeof newPosition === "string" && newPosition.length > 0 ){
        this._position = newPosition
    }else{
        console.log("Incorrect Position");  
    }
}

get salary1(){
    return this._salary;
}
set salary1(newSalary){
    if(typeof newSalary === "number" && newSalary > 0){
        this._salary = newSalary
    }else{
        console.log("Incorrect Salary");  
    }
}
        }

const Employee1 = new Employee("Oleg", 25, "Accountant", -1000)
console.log(Employee1.name1, Employee1.age1, Employee1.position1, Employee1.salary1);
