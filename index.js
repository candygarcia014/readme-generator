const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of the project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide all installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide usage instructions.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide any test instructions.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What license is this project covered by, if any?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];
