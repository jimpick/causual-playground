const CRDTs = require('delta-crdts')

CRDTs.define('mvreg2', require('./mvreg'))

const Mvreg = CRDTs('mvreg2')

const rA = Mvreg('rA')
const rB = Mvreg('rB')
const c1 = Mvreg('c1')
const c2 = Mvreg('c2')
const c3 = Mvreg('c3')

// 0

console.log('rA-0', rA.value(), rA.state())
console.log('rB-0', rB.value(), rB.state())

// 1

c1.write('v')
console.log('c1-1', c1.value(), c1.state())
rB.apply(c1.state())
console.log('rB-1', rB.value(), rB.state())

// 2

c2.write('w')
console.log('c2-2', c2.value(), c2.state())
rB.apply(c2.state())
console.log('rB-2', rB.value(), rB.state())

// 3

c3.write('x')
console.log('c3-3', c3.value(), c3.state())
rA.apply(c3.state())
console.log('rA-3', rA.value(), rA.state())

// 4

c1.apply(rA.state())
console.log('c1-4a', c1.value(), c1.state())
c1.write('y')
console.log('c1-4b', c1.value(), c1.state())
rA.apply(c1.state())
console.log('rA-4', rA.value(), rA.state())

// 5

console.log('rA-5a', rA.value(), rA.state())
console.log('rB-5', rB.value(), rB.state())
rA.apply(rB.state())
console.log('rA-5b', rA.value(), rA.state())

// 6

console.log('rB-6', rB.value(), rB.state())
console.log('c2-6a', c2.value(), c2.state())
c2.apply(rB.state())
console.log('c2-6b', c2.value(), c2.state())
c2.write('z')
console.log('c2-6c', c2.value(), c2.state())

// 7

console.log('c2-7', c2.value(), c2.state())
console.log('rA-7a', rA.value(), rA.state())
rA.apply(c2.state())
console.log('rA-7b', rA.value(), rA.state())


