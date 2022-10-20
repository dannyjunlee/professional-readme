// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    console.log("Badge: error");
  } else {
    const badgeURL = `![License Badge](https://img.shields.io/badge/License-${license}-green)`
    return badgeURL;
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return `## Licenses
    
    No licenses found.`;
  } else {
    return `## Licenses
    
  ${license} ${renderLicenseBadge(license)}`
  };
};

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

[GitHub](https://github.com/${data.gitHub})
[LinkedIn](https://linkedin.com/in/${data.linkedIn})
Email: ${data.email}
Phone Number: ${data.phone}

${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;
