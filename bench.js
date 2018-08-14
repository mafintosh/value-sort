const valueSort = require('./')

const start = Date.now()
const algo = process.argv[2]

if (algo === 'value-sort') {
  for (var i = 0; i < 100; i++) {
    const vs = valueSort(1000000)

    for (var j = 0; j < 100000; j++) {
      vs.add(Math.floor(Math.random() * 1000000))
    }

    for (const k of vs) {}
  }
} else if (algo === 'array-sort') {
  for (var i = 0; i < 100; i++) {
    const arr = []

    for (var j = 0; j < 100000; j++) {
      arr.push(Math.floor(Math.random() * 1000000))
    }

    for (const k of arr.sort(cmp)) {}
  }
} else {
  console.error('Usage: node bench.js array-sort|value-sort')
  process.exit(1)
}

console.log(algo + ' took ' + (Date.now() - start) + 'ms')

function cmp (a, b) {
  return a - b
}
