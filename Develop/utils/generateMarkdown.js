function hasWhiteSpace(str) {
  return /\s/.test(str);
};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!hasWhiteSpace(license)) {
    const badgeURL = `![License Badge](https://img.shields.io/badge/License-${license}-green)`
    return badgeURL;
  } else {
    const badgeLink = `![License Badge](https://img.shields.io/badge/License-${license.replaceAll(' ','%20')}-green)`;
    return badgeLink;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!hasWhiteSpace(license)) {
    const licenseURL = `[${license}](https://opensource.org/licenses/${license})`;
    return licenseURL;
  } else {
    const licenseLink = `[${license}](https://opensource.org/licenses/${license.replaceAll(' ','-')})`
    return licenseLink;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "") {
    return `## Licenses
    
    No licenses found.`;
  } else {
    return `## Licenses
    
${renderLicenseLink(license)}  ${renderLicenseBadge(license)}`
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.yourName}'s ${data.projName}
## Table of Contents
1. [What Problem Does This Solve](#what-problem-does-this-solve)
2. [Motivation](#motivation)
3. [The Why](#the-why)
4. [Learning Outcomes](#learning-outcomes)
5. [Contact Info](#contact-info)
6. [Licenses](#licenses)

## What Problem Does This Solve
  
${data.whatSolve}

## Motivation

${data.motivation}

## The Why

${data.why}

## Learning Outcomes

${data.whatLearn}

## Contact Info

Please do not hesitate to reach out if you have any questions, comments, concerns, or opportunities.

[GitHub](https://github.com/${data.gitHub})\n

[LinkedIn](https://linkedin.com/in/${data.linkedIn})\n

Email: ${data.email}\n

Phone Number: ${data.phone}\n

${renderLicenseSection(data.license)}`;
};

module.exports = generateMarkdown;