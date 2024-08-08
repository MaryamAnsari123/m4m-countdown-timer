#! /usr/bin/env node
import inquirer from "inquirer"; // command: npm i inquirer@9.2.22
import chalk from "chalk"; // command: npm i chalk
import { differenceInSeconds } from "date-fns"; // command: npm i date-fns
console.log(chalk.bgBlueBright.blackBright.bold(`\t *****==== COUNTDOWN TIMER ====***** \n`));
const result = await inquirer.prompt([
    {
        name: "userTimer",
        type: "number",
        message: chalk.cyanBright.bold("please enter the amount of second:"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.red.bold("please Enter a valid number");
            }
            else if (input > 60) {
                return chalk.red.bold("Seconds must be in 60");
            }
            else {
                return true;
            }
        }
    }
]);
console.log(chalk.greenBright.bold(`\t ****** Countdown Start ****** \t`));
let input = result.userTimer;
function start_Time(seconds) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + seconds);
    const interValTime = new Date(intTime);
    setInterval(() => {
        const cuurentTime = new Date();
        const timeDif = differenceInSeconds(interValTime, cuurentTime);
        let minutes = Math.floor(seconds / 60);
        let Seconds = seconds % 60;
        console.log(chalk.yellowBright.bold(`${minutes.toString().padStart(2, "0")}:${Seconds.toString().padStart(2, "0")}`));
        if (timeDif >= 0) {
            seconds--;
        }
        else if (timeDif <= 0) {
            console.log(chalk.redBright.bold("Time's up! :("));
            process.exit();
        }
    }, 1000);
}
start_Time(input);
