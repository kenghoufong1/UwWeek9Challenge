// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  let temp = license;
  let licensebadge;
  if (temp == 'MIT') {
    licensebadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (temp == 'None') {
    licensebadge = null;
  } else if (temp == 'GNU') {
    licensebadge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]';
  }
  return licensebadge;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let everything =
    `<h1>${response.title}<h1> 

<h2>Table of contents<h2>

<ul>
    <li>General information
    <li>Setup 
    <li>License
    <li>Screenshots
    <li>Acceptance Criteria
    <li>Email
    <li>Links
<ul>

<h3><p align="center">General infromation<h3>
    ${response.description}
    </p>

<h3><p align="center">Setup<h3>
    N/A
<h3><p align="center">License<h3>
This repo uses the ${response.license} license . ${renderLicenseBadge(response.license)}


<h3><p align="center">Screenshots<h3>
This appcation does not have a deployed website


<h3><p align="center">Accetance Criteria<h3>
${response.criteria}
</p>

<h3><p align="center">Email<h3>
To Contact me please email me at ${response.email} !

<h3><p align="center">Links<h3>
Below is a link to the deployed website`

  return everything;
}

module.exports = generateMarkdown;
