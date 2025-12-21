const fs = require('fs')

const searchAll = arr => arr.reduce((a, v, i) => {
	if (v==="^") {
		a.push(i)
	}
	return a
}, []);

fs.readFile('input.txt', 'utf8', (err, data) => {

	const lines = data.split('\n')

	const indexes = new Set([])

	const startIndex = lines[0].search("S")

	indexes.add(startIndex)

	const splits = lines.reduce((acc, l) => {

		const line = l.split("")

		if (line.some(c => c==="^")) {

			searchAll(line).forEach(i => {

				if (indexes.has(i)) {

					indexes.delete(i);
					indexes.add(i+1)
					indexes.add(i-1)

					acc = acc+1
				}
			})
		}

		return acc

	}, 0)

	console.log(splits)

})


