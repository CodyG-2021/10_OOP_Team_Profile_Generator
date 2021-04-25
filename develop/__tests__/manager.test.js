const Manager = require('../lib/Manager');

describe("Manager", () => {
	describe("getName", () => {
		it('Make sure it\'s setting the Manager name and pulling it as well.', () => {
			const name = 'Cody';
			const nameTest = new Manager(name, 32, 'email', 'on');
			expect(nameTest.getName()).toBe(name);
		});
	});

	describe("getID", () => {
		it('Make sure it\'s setting the Manager ID and pulling it as well.', () => {
			const eId = '32';
			const idTest = new Manager('Cody', eId, 'email', 'on');
			expect(idTest.getId()).toBe(eId);
		});
	});

	describe("getEmail", () => {
		it('Make sure it\'s setting the Manager E-mail and pulling it as well.', () => {
			const email = 'cody@gmail.com';
			const emailTest = new Manager('Cody', 32, email, 'on');
			expect(emailTest.getEmail()).toBe(email);
		})
	});

	describe("getSchool", () => {
		it('Make sure it\'s setting the Manager E-mail and pulling it as well.', () => {
			const officeNumber = 1;
			const officeNumberTest = new Manager('Cody', 32, 'email', 1);
			expect(officeNumberTest.getOfficeNumber()).toBe(officeNumber);
		})
	});

	describe("getRole", () => {
		it('Make sure it\'s setting the role and pulling it as well.', () => {
			const roleString = 'Manager';
			const roleTest = new Manager('Cody', 32, 'cody@gmail.com', 1);
			expect(roleTest.getRole()).toBe(roleString);
		});
	});

});