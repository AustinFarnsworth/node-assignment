const express = require("express");
const app = express();
const chalk = require("chalk");

console.log(chalk.blue("Hello") + chalk.bgRed.bold("World") + chalk.green("!"));

app.listen(3001);
console.log("Hello World!");
