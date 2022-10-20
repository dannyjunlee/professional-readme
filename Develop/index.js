// TODO: Include packages needed for this application
const {prompt} = require('inquirer');
const {writeFile} = require('fs');
const generateMarkdown = require('./potential-enigma/Develop/utils/generateMarkdown')

// TODO: Create an array of questions for user input
const userInput = (message, required = false) =>
    prompt([{
        name: "val",
        type: "input",
        message: message,
        validate: input => {
            if (input.length === 0 && required) {
                return "This field is required";
            } else {
                return true;
            }
        }
    }])
    .then(answer => answer.val);

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    console.log("Welcome to the Professional README Generator!\n");
    console.log("Please respond to the prompts to generate a new README.\n");

    const data = {
        yourName: await userInput("What is your name?", true),
        projName: await userInput("What is the name of the project?", true),
        linkedIn: await userInput("What is your LinkedIn ID?"),
        gitHub: await userInput("What is your GitHub ID?", true),
        motivation: await userInput("What was your motivation?\n", true),
        why: await userInput("Why did you build this project?\n", true),
        whatSolve: await userInput("What problem does it solve?\n", true),
        whatLearn: await userInput("What did you learn?\n", true)
    };

    const readme = generateMarkdown(data);

    writeFile('README.md', readme, err => {
        err ? console.log(err.message) : console.log("Success! Your README has been created.");
    });
};

// Function call to initialize app
init();