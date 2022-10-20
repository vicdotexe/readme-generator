const fs = require('fs');
const inquirer = require('inquirer');
const licenses = require('./utils/licenses.js');
const questions = [
    generate("input", "Title:", "projectName"),
    generate("input", "Description:", "description"),
    generate("input", "Installation:", "installation"),
    generate("input", "Usage:", "usage"),
    generate("list", "License:", "license", ["choices", licenses.listLicenses()]),
    generate("input", "Contributing:", "contributing"),
    generate("input", "Tests:", "tests"),
    generate("input", "GitHub Username:", "github"),
    generate("input", "Email:", "email")
]

/** Shortcut to generate a question */
function generate(type, message, name, ...rest){
    var gen = {
        type: type,
        message: message,
        name: name
    }
    rest.forEach((pair)=>{
        gen[pair[0]] = pair[1];
    })
    return gen;
}

/** Generates the read-me markdown string */
function generateReadMe(data){
return `# ${data.projectName}
${licenses.getBadgeMarkdown(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## License
The ${data.projectName} project is under the ${licenses.getUrlMarkdown(data.license)}. See the link for more details.

## Questions
GitHub: [${data.github}](https://www.github.com/${data.github})

E-mail: [${data.email}](mailto:${data.email})
`;
}

/** Saves the string to README.md in the output folder */
function saveFile(readme){
    fs.writeFile("output/README.md", readme, (error)=>{if (error) throw error});
}

// start the prompt then generate the read me from the results and save it to a file
inquirer.prompt(questions).then((data)=>{
    saveFile(generateReadMe(data));
});

