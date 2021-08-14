let logger = require('./logger.js');

console.log(logger)

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial (x - 1);
}

console.log(factorial(6))

// function my_function(n){
//     if (n === 1) return 1;
//     return my_function(n - 1) + " " + n
//     }



function my_function(n) {
    if (n === 1) return 1
    else return my_function(n - 1) + " " + n;
}

for (let i = 0; i < 10; i++) {
    let n = Math.floor(Math.random() * 100);
    console.log("При " + n + " получаем:" + my_function(n))
}

function Person(name, age, year) {
    this.name = name;
    this.age = age;
    this.year = year;
}

let employee = [];
employee[0] = new Person("Ivan","25","2017");
employee[1] = new Person("Olga","21","2016");
employee[2] = new Person("Oleg","32","2010");

employee[0].shit = "brown"
employee[1].shit = 'white';
employee[2].shit = 'red'

delete employee[0].age

for (const employeeKey in employee) {
    console.log(employee[employeeKey].name + ', ' + employee[employeeKey].age + ', ' + employee[employeeKey].year + ', '  + employee[employeeKey].shit)
}
