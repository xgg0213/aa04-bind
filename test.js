// Your code here 
const Employee = require('./employee.js');

const employee = new Employee('John Wick','Dog Lover');

setTimeout(() => {
    // option 1: call sayName directly
    // employee.sayName()

    // option 2: set a new name
    // const name = employee.sayName.bind(employee);
    // name();
}, 2000);

setTimeout(() => {
    // option 1: call sayName directly
    // employee.sayOccupation()

    // option 2: set a new name
    const occupation = employee.sayOccupation.bind(employee);
    occupation();
}, 3000);



