// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeImg;
  switch(license){
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
    //no license falls here. I'm not sure if I should make it a seperate case. It is a selectable option, but it should also set badgeImg to empty string.
    default: {
      badgeImg = "";
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
    //no license falls here. I'm not sure if I should make it a seperate case. It is a selectable option, but it should also set licenseLink to empty string.
    default: {
      licenseLink = "";
      break;
    }
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //TODO: expand this
  //It should be impossible for license to be null, but I wanted to account for edge cases.
  if((license === "no license") || (license === null)){
    return "";
  }
  return `
   This application uses an ${license} license.
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("running generateMarkdown function")
  return `# ${data.title}  
  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
  ## Table of Contents
    [Description](#description)
    [Installation](#installation)
    [Usage](#usage)
    [Contributing](#contributing)
    [Tests](#tests)
    [License](#license)
    [Contact](#contact)
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
  ## Contact
  GitHub: ${data.gitHubUsername} (${data.gitHubLink})
  Email: ${data.email}


`;
}

export default generateMarkdown;