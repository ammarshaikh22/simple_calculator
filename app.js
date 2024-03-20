#! /usr/bin/env node
import inquirer from "inquirer";
const data = await inquirer.prompt([
    { message: "input first value", type: "number", name: "first_number" },
    { message: "input first second", type: "number", name: "second_number" },
    {
        message: "please select operation",
        type: "list",
        name: "operation",
        choices: ["addition", "subtraction", "multiplication", "division"]
    }
]);
if (data.operation === "addition") {
    console.log(data.first_number + data.second_number);
}
else if (data.operation === "subtraction") {
    console.log(data.first_number - data.second_number);
}
else if (data.operation === "multiplication") {
    console.log(data.first_number * data.second_number);
}
else if (data.operation === "division") {
    console.log(data.first_number / data.second_number);
}
else {
    console.log('please input a number');
}
