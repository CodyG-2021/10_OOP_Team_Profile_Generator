//Pull in file system and utilize inquirer package
const fs = require('fs');
const inquirer = require('inquirer');
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
]