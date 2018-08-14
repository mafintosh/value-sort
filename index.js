const bitfield = require('indexed-bitfield')

module.exports = size => new ValueSort(size)

class ValueSort {
  constructor (size) {
    this.size = size
    this.values = 0
    this._bucket = new Array(size)
    this._set = bitfield(size)
  }

  add (value, item) {
    this._bucket[value] = item === undefined ? value : item
    if (this._set.set(value, true)) this.values++
  }

  toArray () {
    const ite = this._set.iterator()
    const arr = new Array(this.values)
    for (var i = 0; i < this.values; i++) {
      arr[i] = this._bucket[ite.next(true)]
    }
    return arr
  }

  [Symbol.iterator] () {
    return new Iterator(this)
  }
}

class Iterator {
  constructor (sort) {
    this._bucket = sort._bucket
    this._ite = sort._set.iterator()
  }

  next () {
    const i = this._ite.next(true)
    if (i === -1) return {done: true, value: null}
    return {done: false, value: this._bucket[i]}
  }
}
