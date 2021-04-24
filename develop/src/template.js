function genEmployees(team){

	// let htmlMain = '';
	team.forEach(obj => {
		switch (obj.getRole()) {
			case 'Engineer':
				// console.log('eng pass');
				genEngineer(obj);
				// let stringDataEng = genEngineer(obj);
				// stringDataEng += htmlMain;
				break;
				case 'Intern':
					genIntern(obj);
				// let stringDataInt = genIntern(obj);
				// stringDataInt += htmlMain;
			break;
			default:
				console.log('default');
				// return '';
				break;
		}
	})
	// return htmlMain
};

// function genManager(team) {
// 	team.forEach( obj => {
// 		if (obj.getRole() === 'Manager') {
// 			return`			
// <div class="col-2">
// <div class="card" >
// <div class="card-body">
// <h5 class="card-title">${obj.getName()}</h5>
// <p class="card-text">${obj.getRole()}
// </p>
// </div>
// <ul class="list-group list-group-flush">
// <li class="list-group-item">ID: <span>${obj.getId()}</span></li>
// <li class="list-group-item">Email: <span>${obj.getEmail()}</span></li>
// <li class="list-group-item">GitHub: <a href="https://github.com/${obj.getOfficeNumber}">GitHub Profile</a></li>
// </ul>
// </div>
// </div>
// ` 
// 		} else {
// 			return '';
// 		}
// 	});
// };

function genEngineer(obj) {
	console.log(`made it to the gen eng ${obj.getName()}`);

// return`			
// <div class="col-2">
// <div class="card" >
// <div class="card-body">
// <h5 class="card-title">${obj.getName()}</h5>
// <p class="card-text">${obj.getRole()}
// </p>
// </div>
// <ul class="list-group list-group-flush">
// <li class="list-group-item">ID: <span>${obj.getId()}</span></li>
// <li class="list-group-item">Email: <span>${obj.getEmail()}</span></li>
// <li class="list-group-item">GitHub: <a href="https://github.com/${obj.getGithub}">GitHub Profile</a></li>
// </ul>
// </div>
// </div>
// `
};

function genIntern(obj) {
	console.log(`made it to the gen int ${obj.getName()}`);
// return`			
// <div class="col-2">
// <div class="card" >
// <div class="card-body">
// <h5 class="card-title">${obj.getName()}</h5>
// <p class="card-text">${obj.getRole()}
// </p>
// </div>
// <ul class="list-group list-group-flush">
// <li class="list-group-item">ID: <span>${obj.getId()}</span></li>
// <li class="list-group-item">Email: <span>${obj.getEmail()}</span></li>
// <li class="list-group-item">GitHub: <a href="https://github.com/${obj.getGithub}">GitHub Profile</a></li>
// </ul>
// </div>
// </div>
// `
};

function genFile(team) {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<link
				rel="stylesheet"
				href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
				integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
				crossorigin="anonymous"
			/>
	
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css">
	
			<link rel="stylesheet" href="./css/styles.css" />
	
			<title>Dummy</title>
		</head>
		<body>
			<header class='jumbotron'>
				<h1 class="display-4 text-center">My Team</h1>
			</header>
			<div class="row justify-content-center">
//----------------
			
			</div>
	
			<div class="row justify-content-center">
//----------------
${genEmployees(team)}
			</div>

		</body>
	</html>
	`
};

//${genManager(team)}
//${genEmployees(team)}


//---------same thing

// function genFile (team) {
// 	team.forEach(obj => {
// 		console.log(obj.getRole());
// 	});
// }

// const genFile = (team) => {
// 	team.forEach(obj => {
// 		console.log(obj.getRole());
// 	});
// }

//----------

module.exports = genFile;