const fs = require('fs');
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const generateHTML = require("./generateHTML.js");
const path = require("path");
const puppeteer = require("puppeteer");
const open = require('open');

const writeFileAsync = util.promisify(fs.writeFile);

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub user name."
  },
  {
    type: "list",
    name: "favcolor",
    choices: [
      "beige",
      "blue",
      "pink",
      "ceramic"
    ],
    message: "Please select a favorite color."
  }
]).then(({ username, favcolor }) => {
  const queryUrl = `https://api.github.com/users/${username}`;

  axios.get(queryUrl)
    .then(response => {
      const data = {
        profilePic: response.data.avatar_url,
        name: response.data.name,
        company: response.data.company,
        location: response.data.location,
        html_url: response.data.html_url,
        blog: response.data.blog,
        bio: response.data.bio,
        repos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        star: response.data.public_gists
      };

      const profile = generateHTML({ favcolor, ...data });
      return writeFileAsync(`${username}.html`, profile);


    }).then(generatePdf = async () => {
      // const htmlFile = fs.readFileSync('index.html', 'utf8');
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      const htmlFile = path.resolve("./" + `${username}.html`);
      await page.goto("file://" + htmlFile, { waitUntil: "networkidle2" });
      await page.setViewport({ width: 1400, height: 900 });
      await page.pdf({
        path: "./" + `${username}.pdf`,
        format: "Letter",
        pageRanges: "1",
        printBackground: true,
      });
      await browser.close();
      open(`${username}.pdf`);
    });
});
