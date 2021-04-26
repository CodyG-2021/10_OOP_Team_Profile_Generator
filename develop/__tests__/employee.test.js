// const { it } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee')



describe("Employee", () => {
	describe("getName", () => {
		it('Make sure it\'s setting the employee name and pulling it as well.', () => {
			const name = 'Cody';
			const nameTest = new Employee(name , '42', 'cody@gmail.com');
			expect(nameTest.getName()).toBe(name);
		})
	})

	describe("getID", () => {
		it('Make sure it\'s setting the employee ID and pulling it as well.', () => {
			const eId = '42';
			const idTest = new Employee('Cody', eId, 'cody@gmail.com');
			expect(idTest.getId()).toBe(eId);
		})
	})

	describe("getEmail", () => {
		it('Make sure it\'s setting the employee E-mail and pulling it as well.', () => {
			const email = 'cody@gmail.com';
			const idTest = new Employee('Cody', '42', email);
			expect(idTest.getEmail()).toBe(email);
		})
	})

	describe("getRole", () => {
		it('Make sure it\'s setting the role and pulling it as well.', () => {
			const roleString = 'Employee';
			const roleTest = new Employee('Cody', 1, 'cody@gmail.com');
			expect(roleTest.getRole()).toBe(roleString);
		})
	})

});




// test('Make sure it\'s returning the role string \'Employee\'', () => {
// 	const roleString = 'Employee';
// 	const roleTest = new Employee('Cody', 1, 'cody@gmail.com');
// 	expect(roleTest.getRole()).toBe(roleString);
// });
