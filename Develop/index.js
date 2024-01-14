const fs = require('fs');
const inquirer = require('inquirer')
const questions = require('./utils/questions')
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input


// const markdown = generateMarkdown({ title: 'Some Title' });



// Use inquirer prompt to get their readme details
inquirer.prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers)
    // TODO: Create a function to write README file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
            console.log(err);
            return; 
        }
    
        console.log('ReadMe created successfully!');
    });
})
.catch((error) => {
    console.error('Error:', error);
});
// function getUserInput () {
// }

// function writeToFile(filePath, data) {
// }

// // TODO: Create a function to initialize app
// function init() {
//     // Start getting user input
// }

// // Function call to initialize app
// init();
