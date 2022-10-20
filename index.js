const inquirer = require("inquirer");

const fs = require("fs");

const generateMD = ({ title, description, installation, usage, license, contribute, test, username, email  }) =>
  `# ${title}
  
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  ## Description
   ${description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
   ${installation}
  ## Usage
   ${usage}
  ## License
  ![badge](https://img.shields.io/badge/license-${license}-brightgreen)
  
  This application is covered by the ${license} license. 
  ## Want to Contribute?
   ${contribute}
  ## Tests
   ${test}
  ## Need to ask a Question?
  
  Find me on GitHub: [${username}](https://github.com/${username})
   
  Email me with any questions: [${email}](mailto:${email})
  `;

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your application?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a description of your application.",
      name: "description",
    },
    {
      type: "input",
      message: "Give instructions on how to install your application.",
      name: "installation",
    },
    {
      type: "input",
      message: "Give instructions on how to use your application.",
      name: "usage",
    },
    {
      type: "list",
      message: "What type of license do you want your application to have?",
      choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open",
      ],
      name: "license",
    },
    {
        type: "input",
        message: "Give instructions on how to contribute to your application.",
        name: "contribute",
    },
    {
        type: "input",
        message: "Give instructions on how to test your application.",
        name: "test",
    },
    {
        type: "input",
        message: "Type your Github username",
        name: "username",
    },
    {
        type: "input",
        message: "Type your e-mail.",
        name: "email",
    },
    
  ])
  .then((data) => {
    console.log(data);
    const md = generateMD(data);
    console.log(md);
    fs.writeFile("readme2.md", md, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("successfully created README!");
      }
    });
  });
