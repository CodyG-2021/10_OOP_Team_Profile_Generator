const { test, expect } = require('@jest/globals')
const Employee = require('../lib/Employee')

test('Make sure it\'s setting the employee name and pulling it as well.', () => {
	const name = 'Cody';
	const nameTest = new Employee(name);
	expect(nameTest.getName()).toBe(name);
});

test('Make sure it\'s setting the employee ID and pulling it as well.', () => {
	const eId = 'Cody';
	const idTest = new Employee(eId);
	expect(idTest.getId()).toBe(eId);
});

test('Make sure it\'s setting the employee E-mail and pulling it as well.', () => {
	const email = 'cody@gmail.com';
	const idTest = new Employee(email);
	expect(idTest.getEmail()).toBe(email);
});

test('Make sure it\'s returning the role string \'Employee\'', () => {
	const roleString = 'Employee';
	const roleTest = new Employee('Cody', 1, 'cody@gmail.com');
	expect(roleTest.getRole()).toBe(roleString);
});




