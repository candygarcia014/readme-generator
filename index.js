//Requires inquirer 
const inquirer = require('inquirer');
const fs = require('fs');

//Array of questions for user to determine what will go into the README
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

// This function writes README file- Each part of the README as follows: 
function writeToFile(fileName, data) {
    // const badge = generateBadge(data.license);
    //Name of the project
    fs.writeFile(`${fileName}.md`,
    //table of contents & each section 
    //installation
    //usage
    //license
    //contributing 
    //tests
    //questions
`# **${data.title}

## **Description**
${data.description}

## **Table of Contents**
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)

## **Installation**
${data.installation}

## **Usage**
${data.usage}

## **License**
This project is covered under the ${data.license}.

## **Contributing**
${data.contributing}

## **Tests**
${data.tests}

## **Questions**
If you have any questions or need additional information please contact me by email or GitHub.
<br>
Email: ${data.email}
<br>
GitHub: https://github.com/${data.github}`,
        (err) => err ? console.error(err) : console.log("Thanks you for your input. Congratulations! Your README has been generated!")
    );
}
// This function initializes the program in the terminal 
function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(answers.title, answers);
    });
}
// THis function calls to initialize the README generator 
init();

