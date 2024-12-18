// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"title",
        type: "input",
        message: "Please enter the name of your project. "
    },
    {
        name: "description",
        type: "input",
        message: "Please enter a description for your project. "
    },
    {
        name: "installInstructions",
        type: "input",
        message: "Please enter instructions for how to install your project. "
    },
    {
        name: "usageInfo",
        type: "input",
        message: "Please enter information on how to use your project. "
    },
    {
        name: "contributions",
        type: "input",
        message: "Please enter instructions for how to contribute to your project. "
    },
    {
        name: "testInstructions",
        type: "input",
        message: "Please enter instructions for how to run tests on your project. "
    },
    {
        name: "license",
        type: "list",
        choices: ["MIT", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Boost 1.0", "no license"],
        message: "Please Select a license type. "
    },
    {
        name: "gitHubUsername",
        type: "input",
        message: "What's your GitHub username? "
    },
    {
        name: "gitHubLink",
        type: "input",
        message: "What is the URL of your GitHub profile? "
    },
    {
        name: "email",
        type: "input",
        message: "What is your email address?"
    },
    {
        name: "contactInstructions",
        type: "input",
        message: "Enter any additional instructions for how to contact you (if desired). "
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log("README generated successfully! Check GenerateReadme.md");
    });
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
    .then((data) => {
        writeToFile("generateReadme.md", generateMarkdown(data));
    });
}

// Function call to initialize app
init();
