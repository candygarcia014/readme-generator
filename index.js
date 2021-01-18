const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [[
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'List any installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'List usage instructions.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'List any contribution guidelines.',
        name: 'contributing'
    },
];
