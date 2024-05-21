#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bgGrey.bold("\n\t WELCOME TO MY ADVENTURE GAME \n"));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "Input",
        message: chalk.yellowBright.bold.bgCyanBright("Please Enter Your Name ...")
    }
]);
let Opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.yellowBright.bold("\t\n Select Your Opponent ..."),
        choices: ["Skeleton", "Alein", "Zombie"]
    }
]);
// gathering data 
let p1 = new Player(player.name);
let o1 = new opponent(Opponent.select);
//using do while loop
do {
    // skeleton
    if (Opponent.select == "Skeleton") {
        let Ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: chalk.cyanBright(" What Would You Like To Do ?"),
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (Ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2); // using math.floor function as it round off the value 
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.redBright.bgWhite("\t\nYou Loose, Better Luck Next Time !!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (o1.fuel <= 0) {
                console.log(chalk.greenBright.bold(" \n\tCongratulations , You Win !!/n"));
                process.exit();
            }
        }
        if (Ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green(`You Drink Health Portion Your Fuel Is ${p1.fuel}`));
            process.exit;
        }
        if (Ask.opt == "Run For Your Life") {
            console.log(chalk.red.bold(" You Loose, Better Luck Next Time !!"));
        }
    }
    //Alien 
    if (Opponent.select == "Alein") {
        let Ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do ?",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (Ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2); // using math.floor function as it round off the value 
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold("You Loose, Better Luck Next Time !!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (o1.fuel <= 0) {
                console.log(" Congratulations , You Win !!");
                process.exit();
            }
        }
        if (Ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel Is ${p1.fuel}`);
            process.exit;
        }
        if (Ask.opt == "Run For Your Life") {
            console.log(" You Loose, Better Luck Next Time !!");
        }
    }
    // Zombie 
    if (Opponent.select == "Zombie") {
        let Ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "What Would You Like To Do ?",
                choices: ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if (Ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2); // using math.floor function as it round off the value 
            if (num > 0) {
                p1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("You Loose, Better Luck Next Time !!");
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
            }
            if (o1.fuel <= 0) {
                console.log(" Congratulations , You Win !!");
                process.exit();
            }
        }
        if (Ask.opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(`You Drink Health Portion Your Fuel Is ${p1.fuel}`);
            process.exit;
        }
        if (Ask.opt == "Run For Your Life") {
            console.log(" You Loose, Better Luck Next Time !!");
        }
    }
} while (true);
