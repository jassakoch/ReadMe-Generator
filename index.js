// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//Template of markdown for READme, replaced with template litearls
const generateReadMe = ({ title, description, install, usage, contributors, test, license }) => {
//license if statement for opions of license
let licensechoice  = '';

if (license == 'Apache') {
   licensechoice =  '[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)'
}
else if (license == 'MIT') {
    licensechoice =  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}

const readmeContent =
    `# ${title}

## Description
${description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${install}


## Usage
${usage}


## Credits
${contributors}

## License
${license}
${licensechoice}


## Contact Information


## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute



## Tests

${test}`;
return readmeContent;
}


    // TODO: Create an array of questions for user input
    const questions = [


        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. What problem does it solve?',
        },
        {
            type: 'input',
            name: 'install',
            message: 'How is the application installed?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how to use the project',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Name the contributors',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How was this project tested?',
        },
        {
            type: 'list',
            message: 'What is your preferred license',
            name: 'license',
            choices: ['Apache', 'MIT'],
        },
        {
            type: 'input',
            name: 'githubUser',
            message: 'Enter in your GitHub username. ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter in your email',
        },
    ];



    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMePageContent = generateReadMe(answers);

            fs.writeFile('demo/README.md', readMePageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created readme.md!')
            );
        });






