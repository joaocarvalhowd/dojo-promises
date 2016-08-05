const names = [
	{id: 1, name: 'Pablo'},
	{id: 2, name: 'Luiz'},
	{id: 3, name: 'Rubens'},
];

function getNameById(id) {
	return new Promise((resolve, reject) => {

		let name = names.filter(name => {
			return name.id === id;
		})

		if(name[0] !== undefined) {
			resolve(name[0].name);
		} else {
			reject();
		}

	})
}

function sayHello(name) {
	return new Promise((resolve, reject) => {
		console.log(`Olá ${name}`);

		resolve(name);
	})
}

function sayBye(name) {
	return new Promise((resolve, reject) => {
		console.log(`Tchau, ${name}`);

		resolve();
	})
}

getNameById(1)
	.then(sayHello)
	.then(sayBye)
	.catch(() => {
		console.log('Não encontrado');
	})
