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

getNameById(5)
	.then(response => {
		console.log(`Olá ${response}`);
	})
	.catch(() => {
		console.log('Não encontrado');
	})
