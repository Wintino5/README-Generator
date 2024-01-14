// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return '[Link Text](url to link or id)'
  } else {
    return '';
  }
  // Return a link tag in Markdown that simply scrolls down to header with the name of ## license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const licenseLink = renderLicenseLink(license);
    return `
    ## License
    ${renderLicenseBadge(license)} ${licenseLink}
    Licesnsed under the ${license} license.`;
  } else {
    return '';
  }
  // Return the license section of markdown
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Any Questions](#anyquestions)

## Description
${data.description}



## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Any Questions
${data.anyquestions}
If you have any questions, feel free to reach out:

- Github: [Wintino5](https://github.com/Wintino5)
- Email: [wgjr85@gmail.com](mailto:your.email.com)`;
}

module.exports = generateMarkdown;
