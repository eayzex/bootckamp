// app.js

import chalk from 'chalk';

console.log(chalk.green(' Success!'));
console.log(chalk.red(' Error!'));
console.log(chalk.blue.bold(' Info:') + chalk.yellow(' This is a yellow message.'));
console.log(chalk.bgMagenta.white(' Hello from Chalk! '));
