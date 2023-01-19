// TODO: Include packages needed for this application
const question = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
question
    .prompt([
        {
            type: 'input',
            message: 'What Is The Title Of This Project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter The Description,Installation Instruction,Usage Information,Contribution Guidelines And Test Instructions?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter The Accetance Criteria?',
            name: 'criteria',
        },
        {
            type: 'input',
            message: 'Enter Your Email Address?',
            name: 'email',
        },
        {
            type: 'checkbox',
            message: 'Which License Would You Like To Use or Choose None If You Dont Want Any?',
            name: 'license',
            choices:['MIT','None','GNU'],
        },
    ])
    .then((response) => {
        const filename = `${response.title.toLowerCase().split(' ').join('')}.md`;
        let readmelicense = response.license;
        fs.writeFile(filename,generateMarkdown(response),(err) =>
        err ? console.log(err) : console.log('Success!'));
    });


