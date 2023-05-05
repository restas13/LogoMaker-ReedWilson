const shape = require('./lib/shapes.js');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            name: "shapeName",
            type: "list",
            message: "What shape would you like your svg to be?",
            choices: ["circle", "square", "triangle"],
        },
        {
            name: "shapeColor",
            type: "input",
            message: "What color would you like your shape to be?",
        },
        {
            name: "shapeText",
            type: "input",
            message: "What text would you like to be in the image? (note: maximum of 3 letters)",
        },
        {
            name: "textColor",
            type: "input",
            message: "What text color would you like?",
        }
    ])
    .then((answers) => {
        const userShape = new shape();

        userShape.makeShape(answers.shapeName);
        userShape.setColor(answers.shapeColor);
        userShape.text(answers.shapeText, answers.textColor);

        fs.writeFile('logo.svg', `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${userShape.render()}
            <text x="85" y="90" font-size="30px" fill="${answers.textColor}" text-anchor="middle">${answers.shapeText}</text>
        </svg>`, (err) => {
            if (err) console.log(err);
            console.log('your SVG file has bee written!');
        })
    })