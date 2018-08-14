const valueSort = require('./')

const vs = valueSort(65536)

vs.add(55)
vs.add(1004)
vs.add(0)
vs.add(9999)
vs.add(66)

for (const v of vs) {
  console.log(v)
}
