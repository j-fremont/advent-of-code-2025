const fs = require('fs')

const distanceBetween = (n1, n2) => Math.sqrt(Math.pow(n2.x-n1.x,2) + Math.pow(n2.y-n1.y,2) + Math.pow(n2.z-n1.z,2))

const minExceptZero = arr => arr.reduce((acc, val, idx) => val !== 0 && val < acc.min ? { idx, min: val } : acc, { idx: undefined, min: Number.MAX_SAFE_INTEGER })

const minDistance = dist => dist.reduce((acc, val, idx) => {

	const cur = minExceptZero(val)

	if (cur.min < acc.min) {

		acc = {
			idx1: cur.idx,
			idx2: idx,
			min: cur.min
		}
	}

	return acc

}, { idx1: undefined, idx2: undefined, min: Number.MAX_SAFE_INTEGER })

const fullOfZeros = dist => dist.reduce((acc, val) => {

	if (acc===undefined) {
		acc = val.every(v => v===0)
	} else {	
		acc = acc && val.every(v => v===0)
	}

	return acc;

}, undefined)

//const fullOfZeros = dist => dist.reduce((acc, val) => [...acc, ...val], []).every(i => i===0)

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

let distances = coordinates.reduce((acc, val) => {

	let cur = coordinates.map(c => distanceBetween(c, val))
	acc = [...acc, cur]
	return acc

}, [])

//console.log(Math.max(distances.reduce((acc, val) => [...acc, ...val], [])))
//console.log(distances.reduce((acc, val) => [...acc, ...val], []))

const circuits = []

while (!fullOfZeros(distances)) {

	let m = minDistance(distances)

	console.log(m)

	const c1 = circuits.find(c => c.has(m.idx1))
	const c2 = circuits.find(c => c.has(m.idx2))

	if (c1 && !c2) {
		c1.add(m.idx2)
	} else if (c2 && !c1) {
		c2.add(m.idx1)
	} else if (!c1 && !c2) {
		circuits.push(new Set([m.idx1, m.idx2]))
	}

	distances[m.idx1][m.idx2] = 0
	distances[m.idx2][m.idx1] = 0

}	

const sorted = circuits.sort((a, b) => a.size > b.size)

let total = 1;

for (i=0; i < 3; i++) {
	total = total * sorted[i].size
}

console.log(total)

