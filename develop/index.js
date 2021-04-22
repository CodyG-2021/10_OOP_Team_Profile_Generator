//Pull in file system and utilize inquirer package
const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('node:util');
//Pull in library 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//Initial manager questions
const questions = [
	{
		type: 'input',
		name: 'managerName',
		message: 'What is the managers name?',
		validate: input => {
			if (input) {
					return true;
			} else {
					console.log("Please enter the managers to continue.");
					return false;
			}
	  }
	},
	{
		type: 'input',
		name: 'managerId',
		message: 'What is the managers employee ID?',
		validate: input => {
			if (input) {
					return true;
			} else {
					console.log("Please enter the managers ID to continue.");
					return false;
			}
	  }
	},
	{
		type: 'input',
		name: 'managerEmail',
		message: 'What is the managers E-Mail?',
		validate: input => {
			if (input) {
					return true;
			} else {
					console.log("Please enter the managers e-mail to continue.");
					return false;
			}
	  }
	},
	{
		type: 'input',
		name: 'managerOfficeNum',
		message: 'What is the managers office number?',
		validate: input => {
			if (input) {
					return true;
			} else {
					console.log("Please enter the managers office number to continue.");
					return false;
			}
	  }
	}
];

function writeToFile(fileName, f) {
	fs.writeFile( fileName,	f, (error) => {
			error 
			? console.log(err) 
			: console.log('Check out your HTML file!')
		})
};

function init() {
	inquirer
	.prompt(questions)
	.then(res => {
		writeToFile('./dummyOutput/myTeam.html', generateHTML(res));
	});
};

//Initialize the App
init();