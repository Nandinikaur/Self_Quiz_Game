#! /usr/bin/env node
//Nandini_Kaur 02-05-2024

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.magentaBright(`...>>>WELCOME TO SELF_CHECK QUIZ GAME<<<...`))

console.log(`\n\t${chalk.bgCyan("HOW TO PLAY")}\n\t`);

let a = await inquirer.prompt([
    {
            name: "userName",
            type: "input",
            message: chalk.bold.rgb(143,77,237)("Please Enter Your Name:"),
 }
]);
console.log(chalk.rgb(186,249,1)(`Hello! ${chalk.bold.cyanBright(a.userName)} 
 Let's get started to test your knowledge and see how many points you can score!
 If your question goes wrong you will be ${chalk.bgRedBright("FINISH")}
 So get all the answer right
 `));
console.log(` \n\t${chalk.bold.yellowBright("BEST OF LUCK!!!")} \n\t`);


let question:{
    question_01: string;
    question_02: string;
    question_03: string;
    question_04: string;
    question_05: string;
} = await inquirer.prompt([
    {
        name: "question_01",
        type: "list",
        message: chalk.rgb(249,115,1)("Q1: What is the type of the variable 'let x: number;'?"),
        choices: ["string", "number", "boolean", "null"]
    },
    {
        name: "question_02",
        type: "list",
        message: chalk.rgb(249,115,1)("Q2: What is the purpose of the 'any' type in Typescript?"),
        choices: ["to specify that a variable can hold any type of value",
         "to specify that a variable can only hold numbers",
         "to specify that a variable can only hold strings",
         "to specify that a variable can only hold boolean"
        ]
    },
    {
        name: "question_03",
        type: "list",
        message: chalk.rgb(249,115,1)("Q3: What is the difference between 'let' and 'const' in Typescript?"),
        choices: ["'let' is used for arrays, 'const' is used for objects",
         "'let' is used for numbers, 'const' is used for 'strings'", 
         "'let' is used for functions, 'const' is used to variables", 
         "'let' is mutable, 'const' is immutable"]
    },
    {
        name: "question_04", 
        type: "list",
        message: chalk.rgb(249,115,1)("Q4: What is the purpose of the 'interface' keyword in Typescript?"),
        choices:["to define a new class", "to create a new function", "to specify the shape of an object", "to import a module"]
    },
    {
        name: "question_05",
        type: "list",
        message: chalk.rgb(249,115,1)("Q5: What is the file extension for Typescript files?"),
        choices: [".js", ".ts", ".java", ".cpp"]
    }
]);

let score: number = 0;

switch(question.question_01){
    case "number":
    console.log(chalk.green("1. Correct Answer!🌟"));
    ++score;
    break;
    default:
        console.log(chalk.red("1. Incorrect Answer☠️"));
}

switch(question.question_02){
    case "to specify that a variable can hold any type of value":
    console.log(chalk.green("2. Correct Answer!🌟"));
    ++score;
    break;
    default:
        console.log(chalk.red("2. Incorrect Answer☠️"));
}

switch(question.question_03){
    case "'let' is mutable, 'const' is immutable":
    console.log(chalk.green("3. Correct Answer!🌟"));
    ++score;
    break;
    default:
        console.log(chalk.red("3. Incorrect Answer☠️"));
}

switch(question.question_04){
    case "to specify the shape of an object":
    console.log(chalk.green("4. Correct Answer!🌟"));
    ++score;
    break;
    default:
        console.log(chalk.red("4. Incorrect Answer☠️"));
}

switch(question.question_05){
    case ".ts":
    console.log(chalk.green("5. Correct Answer!🌟"));
    ++score;
    break;
    default:
        console.log(chalk.red("5. Incorrect Answer☠️"));
}

console.log(`\n\t${chalk.bold.cyanBright(a.userName)} your score is"${chalk.yellowBright(score)}"\n\t `);
