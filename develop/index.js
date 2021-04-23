//Pull in file system and utilize inquirer package
const fs = require('fs');
const inquirer = require('inquirer');
const { createEmptyTestResult } = require('@jest/test-result');
const { inherits } = require('node:util');
const { choices } = require('yargs');
//Pulls in library 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//Pulls in questions as to not clutter index file
import {managerQuest, addEmpQuest, addEmpType, engineerQuest, internQuest} from './lib/questions';

//Holder array for added members
const team = [];

function init() {
	inquirer
		.prompt(managerQuest)
		.then(res => {
			const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNum);
			team.push(manager);
			addEmployees();
		})
	// .then(res => {
	// 	writeToFile('./dummyOutput/myTeam.html', generateHTML(res));
	// });
};

function addEmployees() {
	inquirer
		.prompt(addEmpQuest)
		.then(res => {
			res = 'Yes'
				? createEmp()
				: writeToFile()
		});
};

function createEmp() {
	inquirer
		.prompt(addEmpType)
		.then(res => {
			if (res === 'Engineer') {
				const engineer = new Engineer(res.engName, res.engId, res.engEmail, res.engGithub);
				team.push(engineer);
				addEmployees();
			}
			const intern = new Intern(res.intName, res.intId, res.intEmail, res.intSchool);
			team.push(intern);
			addEmployees();
		})
}

// function writeToFile(fileName, f) {
// 	fs.writeFile( fileName,	f, (error) => {
// 			error 
// 			? console.log(err) 
// 			: console.log('Check out your HTML file!')
// 		})
// }; 

//Initialize the App
init();