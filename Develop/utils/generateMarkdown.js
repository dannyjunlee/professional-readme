// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.yourName}'s ${data.projName}
## Motivation

${data.motivation}

## The Why

${data.why}

## What it Solves

${data.whatSolve}

## Learning Outcomes

${data.whatLearn}

## Contact Info

Please do not hesitate to reach out if you have any questions, comments, concerns, or opportunities.

You can reach me through LinkedIn at https://linkedin.com/in/${data.linkedIn}/
or through GitHub at https://github.com/${data.gitHub}/.

## Licenses


`;
}

module.exports = generateMarkdown;
