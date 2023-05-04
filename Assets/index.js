const shape = require('./lib/shapes.js');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "list",
            message: "What shape would you like your svg to be?",
            choices: ["circle", "square", "triangle"],
            default: "circle",
        },
        {
            type: "input",
            message: "What color would you like your shape to be?",
        },
        {
            type: "input",
            message: "What text would you like to be in the image? (note: maximum of 3 letters)"
        },
        {
            type: "input",
            message: "What text color would you like?",
        }
    ])
    .then((answers) => {

    })