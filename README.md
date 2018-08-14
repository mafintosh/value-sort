# value-sort

Fast and iterable data structure for sorting bounded values

```
npm install value-sort
```

Uses a fixed size array to store values and a [indexed-bitfield](https://github.com/mafintosh/indexed-bitfield) to iterate them.

## Usage

``` js
const valueSort = require('value-sort')

// all values are between [0, 65536[
const vs = valueSort(65536)

vs.add(55)
vs.add(1004)
vs.add(0)
vs.add(9999)
vs.add(66)

// the valueSort instance if iterable
for (const v of vs) {
  console.log(v)
}
```

Running the above prints

```js
0
55
66
1004
9999
```

If you want the values as a sorted array instead use

```js
const arr = vs.toArray()
```

If you pass an object as the 2nd arg to add that object will
show up in the iteration instead of the value

```js
// the object on the right is returned instead of 42 on iteration
vs.add(42, {index: 42, hello: 'world'})
```

## License

MIT
