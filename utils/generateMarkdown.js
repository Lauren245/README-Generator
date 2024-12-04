// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeImg;
  switch(license){
    case "MIT": {
      badgeImg = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    }
    case "Apache 2.0": {
      badgeImg = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    }
    case "BSD 3-Clause": {
      badgeImg = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    }
    case "BSD 2-Clause": {
      badgeImg = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    }
    case "Boost 1.0": {
     badgeImg = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    }
    case "no license": {
      badgeImg = "";
      break;
    }
    default: {
      badgeImg = "";
      console.error("An error has occured while assigning a badge image.");
      break;
    }
  }
  return badgeImg;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license){
    case "MIT": {
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    }
    case "Apache 2.0": {
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    }
    case "BSD 3-Clause": {
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    }
    case "BSD 2-Clause": {
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    }
    case "Boost 1.0": {
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    }
    case "no license": {
      licenseLink = "";
      break;
    }
    default: {
      licenseLink = "";
      console.error("An error occured while assigning a license link.")
      break;
    }
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if((license === "no license")){
    return "";
  }
  return `Licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)}  ${renderLicenseLink(data.license)}
  ## Table of Contents
  [Description](#description) \n
  [Installation](#installation) \n
  [Usage](#usage) \n
  [Contributing](#contributing) \n
  [Tests](#tests) \n
  [License](#license) \n
  [Questions](#questions) \n
  &nbsp;&nbsp;&nbsp;&nbsp;[Additional Contact Instructions](#additional-contact-instructions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installInstructions}
  ## Usage
  ${data.usageInfo}
  ## Contributing
  ${data.contributions}
  ## Tests
  ${data.testInstructions}
  ## License
  ${renderLicenseSection(data.license)}
  ## Questions
  If you have additional questions, you can contact me at: 
  
  GitHub: [${data.gitHubUsername}](${data.gitHubLink}) \n
  Email: ${data.email}
  ### Additional Contact Instructions
  ${data.contactInstructions}
`;
}

export default generateMarkdown;
