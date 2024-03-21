#! /usr/bin/env node
import inquirer from 'inquirer';
let answer = await inquirer.prompt([
    { messege: 'Enter number', type: 'number', name: 'firstnumber' },
    { messege: 'Enter second number', type: 'number', name: 'secondnumber' },
    {
        messege: 'select one operator', type: 'list', name: 'operator', choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
]);
if (answer.operator === 'Addition') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === 'Subtraction') {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === 'Multiplication') {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === 'Division') {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log('please Enter number');
}
