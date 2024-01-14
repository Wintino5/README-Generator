const licenses = [
    {
        name: 'Apache License 2.0',
        badge: 'https://img.shields.io/badge/License-Apache2.0-blue.svg'
    },
    {
        name: 'Eclipse Public License',
        badge: 'https://img.shields.io/badge/License-Eclipse-Public-License-orange.svg'
    },
    {
        name: 'Boost Software License 1.0',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-blue.svg'
    },
    {
        name: 'Mit License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg'
    },
    {
        name: 'GNU',
        badge: 'https://img.shields.io/badge/License-GNU-green.svg'
    },
]

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please Enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Wrtie a brief description'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Table of Contents included'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide some installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some usage information'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license you used for your project',
        choices: licenses.map((license) => license.name)
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are some contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions'
    },
    {
        type: 'input',
        name: 'anyquestions',
        message: 'If there are any questions here is my GitHub: Wintino5 and Email: wgjr85@gmail.com'
    },
]

module.exports = questions;