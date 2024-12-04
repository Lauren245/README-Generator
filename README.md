# README Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tutorials](#tutorials)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Screenshots](#screenshots)

[Video Demonstration](#video-demonstation)


## Description
This software streamlines the process of creating a README for a software development project. It uses an npm package     
called Inquirer to ask the user for input via the command line. The software asks for information about the project that the README is being generated for. It then outputs this information into a formatted markdown document which it generates. This markdown document also adds a badge image for the license type, a licence type statement, and a table of contents with links to the various sections.

I would like to expand this project in the future to add tests, increase license type choices, and add the ability to completely omit some sections if desired.
I would also like to add more fields such as resources used.

## Installation
1. Clone [repository](https://github.com/Lauren245/README-Generator) 
2. Open code in a code editor such as VS Code.
3. Navigate to the root folder for the project in the integrated terminal and run the command: *npm i*.
4. Navigate to the index.js file in the integrated terminal and run the command: *node index.js*.

## Usage
Once the software is ran, it will prompt the user with the following messages in the command line. These are answered one at a time via the command line.
- Please enter the name of your project.
- Please enter a description for your project.
- Please enter instructions for how to install your project.
- Please enter information on how to use your project.
- Please enter instructions for how to contribute to your project.
- Please enter instructions for how to run tests on your project.
- Please select a license type (currently the user can choose from *MIT, Apache 2.0, BSD 3-Clause, BSD 2-Clause, Boost 1.0, and no license* as license options).
- What is your GitHub username? 
- What is the URL of your GitHub profile?
- What is your email address.

After answering these questions, the user will be told if the README was created successfully. If it was, the new README can be found in a generated file called generateREADME.md. If it was unsuccessful, then the console will display the appropriate error message.

## Tests 
There are currently no automated tests for this project. I would like to add those in the future. The program generates a new README each time, so the code can 
be tested manually by rerunning the node index.js command.

## License 
Copyright 2024 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: Lauren245 https://github.com/Lauren245

Email: laurenmoorejm@gmail.com


## Resources

### Tutorials
1. **[Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)** by Markdown Guide: Used as a guide on basic Markdown syntax including headings, italics, etc.  
2. **[How to Create a Table of Contents in Markdown](https://www.docstomarkdown.pro/create-a-table-of-contents-in-markdown/)**
by Docs to Markdown Pro: Used as guide for syntax to create a table of contents in Markdown.
3. **[Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)** by GitHub user Lukas Himsel ([lukas-h](https://gist.github.com/lukas-h)):
used code as reference for rendering license badges in Markdown.
4. **[Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)** by edX Bootcamps LLC: Used as reference for what a professional README should look like. 
5. **[How to use Inquirer.js](https://javascript.plainenglish.io/how-to-inquirer-js-c10a4e05ef1f)** by Mat Wilmot on Medium: used for additional research on how to use Inquirer.js.
6. **[How to indent a few lines in Markdown markup?](https://stackoverflow.com/questions/6046263/how-to-indent-a-few-lines-in-markdown-markup)** from Stack Overflow answered by user [alegscogs](https://stackoverflow.com/users/373602/alegscogs) edited by user [Scott C Wilson](https://stackoverflow.com/users/319741/scott-c-wilson): How to indent lines in Markdown (used in generated Markdown's table of contents).
7. [Help debugging issue with table of contents](https://chatgpt.com/share/674f58bd-1d04-8012-aeb5-f779259292b4): I used ChatGPT to debug the table of contents generated in generateREADME.md. I was following the table of contents syntax but it was not working. With ChatGPT, I learned that I couldn't indent the links like I was. Removing this indentation fixed the bug.

### 3rd-Party Software
1. **[shields](https://github.com/badges/shields)** by [Sheilds.io](https://shields.io/) - Licensed under [CC0 LICENSE](https://github.com/badges/shields/blob/master/LICENSE)
2. **[Inquirer.js](https://github.com/SBoudrias/Inquirer.js)** Copyright (c) 2023 Simon Boudrias (twitter: [@vaxilart](https://twitter.com/Vaxilart)) - Licensed under the MIT license.
 
## Screenshots
<!--I want captions so I am using the same text as the alt text because it provides a good explanation of the images-->
**Image of the questions in the console showing the selection method for choosing a licesnse.**

![Image of the questions in the console showing the selection method for choosing a licesnse.](assets\images\README-project-license-select.jpg)

**Image depicting all fields filled out in the console along with a success message.**

![Image depicting all fields filled out in the console along with a success message that says README generated successfully! Check generateREADME.md](assets\images\README-project-successful-generation.jpg)

**Image of the generated README file in its "raw" markdown format (*includes license information*).**

![Image of the generated README file in its raw markdown format. This version includes license information.](assets\images\README-project-generated-md-file.jpg)

**Image of the preview for the generated README file (image 1 of 2) (*includes license information*).**

![Image of the preview for the generated README file. Image 1 of 2. This version includes license information.](assets\images\README-project-generated-md-file-preview-part-1.jpg)

**Image of the preview for the generated README file (image 2 of 2) (*includes license information*).**

![Image of the preview for the generated README file. Image 2 of 2. This version includes license information.](assets\images\README-project-generated-md-file-preview-part-2.jpg)

**Image of the preview for the generated README file (*does not include license information*). License information is not included if the user selects the *"no license"* option.**

![Image of the preview for the generated README file. This version does not include license information. License information is not included if the user selects the no license option.](assets\images\README-project-generated-md-file-preview-no-license.jpg)

## Video Demonstation
 TODOS 
  1. Record video and include link

**[Back to top](#readme-generator)**