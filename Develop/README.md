# Danny Lee's Professional README Generator
## What Problem Does This Solve?
  
This project solves the problem of having to create a new README for every new project, which can not only be time consuming but also leave room for inconsistency and errors.

## Motivation

My motivation was to create a README generator for quality of life in my future endeavors as a web developer.

## The Why

I built this project because I felt I could use this at the start of every new project I embark upon.

## Learning Outcomes

I learnt how to create a file from scratch using JavaScript.

## Contact Info:

Please do not hesitate to reach out if you have any questions, comments, concerns, or opportunities.

[GitHub](https://github.com/dannyjunlee)


[LinkedIn](https://linkedin.com/in/daniel-jun-lee)


Email: danieljlee9893@gmail.com


Phone Number: 2017256543


## Licenses
    
  function renderLicenseLink(license) {
  if (!hasWhiteSpace(license)) {
    const licenseURL = `[License Link](https://opensource.org/licenses/${license})`;
    return licenseURL;
  } else {
    const licenseLink = `[${license}](https://opensource.org/licenses/${license.replaceAll(' ','-')})`
    return licenseLink;
  }
}   ![License Badge](https://img.shields.io/badge/License-Apache%202.0-green)