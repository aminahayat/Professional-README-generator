// Following are packages that are needed 
const inquirer = require("inquirer");
const fs = require("fs");

// Create an array of questions for user input

// below are qs the user will need to enter which will later get pasted onto HTML
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title of your application",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a detailed description of your application",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter any installation instructions for your application",
    },
    {
      type: "input",
      name: "usage",
      message: "What usage information is required?",
    },
    {
      type: "list",
      name: "license",
      message: "Which of the following licenses if required?",
      choices: [
        {
          name: "No License",
          value: "None",
        },
        {
          name: "Apache 2.0",
          value:
            "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        },
        {
          name: "MIT",
          value:
            "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        },
        {
          name: "Mozilla",
          value:
            "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
        },
        {
          name: "GNU GPL v3",
          value:
            "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        },
        {
          name: "Eclipse 1.0",
          value:
            "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
        },
      ],
    },

    {
      type: "input",
      name: "contributions",
      message: "How have contributions been made to this application?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Enter information about any tests running currently in the application",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your developers Email address",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github user name",
    },
  ]);
};

// write read me file and log any errors if so..

const init = () => {
  questions().then((answers) => {
    const ReadmeStuff = GenREADME(answers);

    fs.writeFile("README.md", ReadmeStuff, (err) =>
      err ? console.log(err) : console.log("Woohoo! Read Me Generated!")
    );
  });
};

init();

// Generate readme below...

// Generating separate links to the table of contents using a tag..

const GenREADME = ({
  title,
  description,
  installation,
  usage,
  license,
  contributions,
  tests,
  email,
  github,
}) =>
  `${license}
# Title 
${title}
# Description Of Application 
${description}
# Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
### Installation Information
<a name ="installation"> </a>
${installation}
### Usage Information
<a name ="usage"> </a>
${usage}
### License Information
<a name ="license"> </a>
${license}
### Contributions
<a name ="contributions"> </a>
${contributions}
### Tests Information
<a name ="tests"> </a>
${tests}
# Questions
Any questions for me? Send me a direct email on ${email}.
You can also visit my Github profile here www.github.com/${github}
`;

// genrate BADGE TO GO AT THE TOP..