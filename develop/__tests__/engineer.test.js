const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
	describe("getName", () => {
		it('Make sure it\'s setting the Engineer name and pulling it as well.', () => {
			const name = 'Cody';
			const nameTest = new Engineer(name, 32, 'email', 'github');
			expect(nameTest.getName()).toBe(name);
		})
	})
	describe("getID", () => {
		it('Make sure it\'s setting the Engineer ID and pulling it as well.', () => {
			const eId = '32';
			const idTest = new Engineer('Cody', eId, 'email', 'github');
			expect(idTest.getId()).toBe(eId);
		})
	})
	describe("getEmail", () => {
		it('Make sure it\'s setting the Engineer E-mail and pulling it as well.', () => {
			const email = 'cody@gmail.com';
			const emailTest = new Engineer('Cody', 32, email, 'github');
			expect(emailTest.getEmail()).toBe(email);
		})
	})
	describe("getGithub", () => {
		it('Make sure it\'s setting the Engineer E-mail and pulling it as well.', () => {
			const github = 'CodyG-2021';
			const githubTest = new Engineer('Cody', 32, 'email', github);
			expect(githubTest.getGithub()).toBe(github);
		})
	})
	describe("getRole", () => {
		it('Make sure it\'s setting the role and pulling it as well.', () => {
			const roleString = 'Engineer';
			const roleTest = new Engineer('Cody', 1, 'cody@gmail.com','github');
			expect(roleTest.getRole()).toBe(roleString);
		})
	})
});