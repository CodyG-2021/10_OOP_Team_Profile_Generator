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
		message: 'What is the managers name?'
	},
	{
		type: 'input',
		name: 'managerId',
		message: 'What is the managers employee ID?'
	},
	{
		type: 'input',
		name: 'managerEmail',
		message: 'What is the managers E-Mail?'
	},
	{
		type: 'input',
		name: 'managerOfficeNum',
		message: 'What is the managers office number?'
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