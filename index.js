var chalk = require("chalk");

for (i = 0; i < 50; i++) {
  console.log(chalk.rgb(0, i * 50, i * 50).bold('WOW'))
  console.log(chalk.rgb(i * 50, 0, i * 50).bold('WOW'))
  console.log(chalk.rgb(i * 50, i * 50, 0).bold('WOW'))
}