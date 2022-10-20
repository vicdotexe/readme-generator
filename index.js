const fs = require('fs');
const inquirer = require('inquirer');
const licenses = require('./utils/licenses.js');

inquirer.prompt([
    {
        type: "list",
        message: "Pick a License",
        name: "license",
        choices: licenses.listLicenses
    }
]).then((data)=>{
    saveFile(generateReadMe(data));
});

function generateReadMe(data){
    return `## License\n${licenses.buildLicenseSection("test-repo",data.license)}`;
}

function saveFile(readme){
    fs.writeFile("output/README.md", readme, (error)=>{if (error) throw error});
}