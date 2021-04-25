//Pull in file system and utilize inquirer package
const fs = require('fs');
const inquirer = require('inquirer');
// const { createEmptyTestResult } = require('@jest/test-result');
// const { inherits } = require('node:util');
// const { choices } = require('yargs');
// import { create } from 'istanbul-reports';
//Pulls in library 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const genFile = require('./src/template');

//Pulls in questions as to not clutter index file
// const quest = require('./lib/questions');
// console.log(managerQuest);


//test
// const a = require('./10_OOP_Team_Profile_Generator/develop/lib/questions.js');

//Holder array for added members
const team = [];

//Cant figure out how to get questions in other js file
const managerQuest = [
	{
		type: 'input',
		name: 'managerName',
		message: 'What is the managers name?',
		validate: input => {
			if (input) {
				return true;
			} else {
				return "Please enter the managers to continue.";
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
				return "Please enter the managers ID to continue."
				
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

const addEmpQuest = [
	{
		type: 'list',
		name: 'empAdd',
		message: 'Would you like to add more employees?',
		choices: ['Yes', 'No']
	}
]

const addEmpType = [
	{
		type: 'list',
		name: 'typeEmp',
		message: 'What employee position would you like to add?',
		choices: ['Engineer', 'Intern']
	}
]

const engineerQuest = [
	{
		type: 'input',
		name: 'engName',
		message: 'What is the Engineer\'s name?'
	},
	{
		type: 'input',
		name: 'engId',
		message: 'What is the Engineer\'s ID Number?'
	},
	{
		type: 'input',
		name: 'engEmail',
		message: 'What is the Engineer\'s E-Mail?'
	},
	{
		type: 'input',
		name: 'engGithub',
		message: 'What is the Engineer\'s GitHub account?'
	}
]
const internQuest = [
	{
		type: 'input',
		name: 'intName',
		message: 'What is the Intern\'s name?'
	},
	{
		type: 'input',
		name: 'intId',
		message: 'What is the Intern\'s ID Number?'
	},
	{
		type: 'input',
		name: 'intEmail',
		message: 'What is the Intern\'s E-Mail?'
	},
	{
		type: 'input',
		name: 'intSchool',
		message: 'What school does the Intern go to?'
	}
]

function writeToFile(fileName, f) {
	fs.writeFile( fileName,	f, (error) => {
			error 
			? console.log(error) 
			: console.log('Check out your HTML file!')
		})
}; 

function createInt() {
	inquirer
	.prompt(internQuest)
	.then(res => {
		team.push(new Intern(res.intName, res.intId, res.intEmail, res.intSchool));
		addEmployees();
	})
};

function createEng() {
	inquirer
	.prompt(engineerQuest)
	.then(res => {
		team.push(new Engineer(res.engName, res.engId, res.engEmail, res.engGithub));
		addEmployees();
	})
};

function createEmp() {
	inquirer
	.prompt(addEmpType)
	.then(res => {
		console.log(res);
		res.typeEmp === 'Engineer'
		? createEng()
		: createInt()
	})
};

function addEmployees() {
	inquirer
		.prompt(addEmpQuest)
		.then(res => {
			console.log(res);
			res.empAdd === 'Yes'
			? createEmp()
			// : genFile(team)
			:	writeToFile('./dist/dummyOutput/myTeam.html', genFile(team))	
		// 	: console.log(team);
		});
};

function init() {
	inquirer
		.prompt(managerQuest)
		.then(res => {
			team.push(new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNum));
			// console.log(a);
			addEmployees();
		});
};

//Initialize the App
init();