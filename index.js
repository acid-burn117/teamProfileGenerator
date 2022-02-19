const inquire = require('inquirer');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const pageTemplete = require('./src/pagetemplete');
const fs = require('fs');
const path= require('path')
let teamMembers = [];
const outputDirectory = path.resolve(__dirname, "dist")
const outputPath = path.join(outputDirectory, "index.html")



function createManager() {
    inquire.prompt([
        {
            type: "input",
            message: "Enter managers name.",
            name: "nameInput"
        },
        {
            type: "input",
            message: "Enter managers ID number.",
            name: "idInput"
        },
        {
            type: "input",
            message: "Enter managers email address.",
            name: "emailInput"
        },
        {
            type: "input",
            message: "Enter managers office number.",
            name: "officeInput"
        },
    ]).then(response => {
        const newManager = new manager(response.nameInput, response.idInput, response.emailInput, response.officeInput);
        teamMembers.push(newManager);
        chooseMember();
    })

};
function createIntern() {
    inquire.prompt([
        {
            type: "input",
            message: "Enter intern name.",
            name: "nameInput"
        },
        {
            type: "input",
            message: "Enter intern ID number.",
            name: "idInput"
        },
        {
            type: "input",
            message: "Enter intern email address.",
            name: "emailInput"
        },
        {
            type: "input",
            message: "Enter interns school.",
            name: "schoolInput"
        },
    ]).then(response => {
        const newIntern = new intern (response.nameInput, response.idInput, response.emailInput, response.schoolInput);
        teamMembers.push(newIntern);
        chooseMember();
    })
};
function createEngineer() {
    inquire.prompt([
        {
            type: "input",
            message: "Enter engineers name.",
            name: "nameInput"
        },
        {
            type: "input",
            message: "Enter engineers ID number.",
            name: "idInput"
        },
        {
            type: "input",
            message: "Enter engineers email address.",
            name: "emailInput"
        },
        {
            type: "input",
            message: "Enter engineers github.",
            name: "githubInput"
        },
    ]).then(response => {
        const newEngineer = new engineer(response.nameInput, response.idInput, response.emailInput, response.githubInput);
        teamMembers.push(newEngineer);
        chooseMember();
    })
};
function chooseMember() {
    inquire.prompt([
        {
            type: "list",
            name: "member",
            message: "choose what member you want to add.",
            choices: ["Engineer", "Intern", 'None'],
        }
    ]).then(response => {
        if (response.member === "Intern") {
            createIntern()
        } else if (response.member === "Engineer") {
            createEngineer()
        } else {
            teamBuilder()
    }})
};
function teamBuilder() {
  fs.writeFile(outputPath, pageTemplete(teamMembers), err =>{
      err ? console.error(err) : console.log("Team Built!")
  })
};
createManager();