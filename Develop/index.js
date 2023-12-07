// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//Template of markdown for READme, replaced with template litearls
const generateReadMe = ({ title, description, install, usage, contributors, test, license }) => {
//license if statement for opions of license
if (license == 'Apache') {
    return '[![License: Apache](https://img.shields.io/badge/License-Apache-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)'
}
else if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}
else { return ''; }
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

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${test}`;
return readmeContent;



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
    ];



    inquirer
        .prompt(questions)
        .then((answers) => {
            const readMePageContent = generateReadMe(answers);

            fs.writeFile('README.md', readMePageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created readme.md!')
            );
        });






