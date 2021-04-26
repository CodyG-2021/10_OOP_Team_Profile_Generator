//Pull in file system and utilize inquirer package
const fs = require('fs');
const inquirer = require('inquirer');

//Pulls in library 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const genFile = require('./src/template');

//Pulls in questions as to not clutter index file
const quest = require('./lib/questions');

//Holder array for added members
const team = [];

//Write the file check for errors
function writeToFile(fileName, f) {
	fs.writeFile( fileName,	f, (error) => {
			error 
			? console.log(error) 
			: console.log('Check out your HTML file!')
		})
}; 

//Will create the Intern Obj from the questions
function createInt() {
	inquirer
	.prompt(quest.internQuest)
	.then(res => {
		team.push(new Intern(res.intName, res.intId, res.intEmail, res.intSchool));
		addEmployees();
	})
};

//Will create the Engineer Obj from the questions
function createEng() {
	inquirer
	.prompt(quest.engineerQuest)
	.then(res => {
		team.push(new Engineer(res.engName, res.engId, res.engEmail, res.engGithub));
		addEmployees();
	})
};

//Asks the user which employee type they want to add
function createEmp() {
	inquirer
	.prompt(quest.addEmpType)
	.then(res => {
		// console.log(res);
		res.typeEmp === 'Engineer'
		? createEng()
		: createInt()
	})
};

//Asks the user if they want to add more employees
function addEmployees() {
	inquirer
		.prompt(quest.addEmpQuest)
		.then(res => {
			// console.log(res);
			res.empAdd === 'Yes'
			? createEmp()
			:	writeToFile('./dist/myTeam.html', genFile(team))	
		});
};

//Prompts the manager question then to the next question
function init() {
	inquirer
		.prompt(quest.managerQuest)
		.then(res => {
			team.push(new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNum));
			addEmployees();
		});
	};
	
	//Initialize the App
	init();
