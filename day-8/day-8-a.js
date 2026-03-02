const fs = require('fs')

const distanceBetween = (n1, n2) => Math.sqrt(Math.pow(n2.x-n1.x,2) + Math.pow(n2.y-n1.y,2) + Math.pow(n2.z-n1.z,2))

const minExceptZero = arr => arr.reduce((acc, val, idx) => val !== 0 && val < acc.min ? { idx, min: val } : acc, { idx: undefined, min: Number.MAX_SAFE_INTEGER })

let coordinates = []

const data = fs.readFileSync('input.txt', 'utf8')

const lines = data.split('\n')

lines.pop()

coordinates = lines.map(l => {

	const coo = l.split(',')
		
	return {
		x: parseInt(coo[0]),
		y: parseInt(coo[1]),
		z: parseInt(coo[2])
	}
})

let distances = coordinates.reduce((acc, val, i) => {

	let cur = coordinates.filter((c, j) => i<j).map(c => distanceBetween(c, val))
	acc = [...acc, cur]
	return acc

}, [])

console.log(distances)

const distancesWithIndex = distances.reduce((acc, val, idx2) => {
	
	const d = val.map((min, idx1) => ({
		idx1,
		idx2,
		min
	}))

	return [...acc, ...d]

}, []).sort((a, b) => a.min - b.min)

console.log(distancesWithIndex) 

let circuits = []

distancesWithIndex.forEach(d => {

	let c1 = circuits.find(c => c.has(d.idx1))
	let c2 = circuits.find(c => c.has(d.idx2))

	if (c1 && !c2) {
		c1.add(d.idx2)
	} else if (c2 && !c1) {
		c2.add(d.idx1)
	} else if (!c1 && !c2) {
		circuits.push(new Set([d.idx1, d.idx2]))
	} else if (c1 && c2 && c1!==c2) {
		c1 = new Set([...c1, ...c2])

		circuits = circuits.filter(c => !(c.size===c2.size && [...c].every(x => c2.has(x))))
	}
})

circuits.sort((a, b) => b.size - a.size)

console.log(circuits)

let total = 1;

for (i=0; i < 3; i++) {
	total = total * circuits[i].size
}

console.log(total)

