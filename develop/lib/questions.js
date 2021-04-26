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


module.exports = {managerQuest, addEmpQuest, addEmpType, engineerQuest, internQuest};
