const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {

  const lines = data.split('\n')

	const splits = lines.reduce((acc, l) => {

		const re = /\s\s*/;
		acc = [...acc, l.split(re)];
		return acc;

	}, [])

	splits.pop()

	const opers = splits.pop();

	const result = splits.reduce((acc, s) => {

		s.forEach((n, i) => {

			if (opers[i]==='+') {

				acc[i] = acc[i] + parseInt(n);

			} else {

				acc[i] = acc[i] * parseInt(n);
			}	

		})

		return acc;

	}, opers.map(o => o==='+' ? 0 : 1))

	console.log(result.reduce((acc, r) => {

		acc = acc + r;

		return acc;

	}, 0))

})

