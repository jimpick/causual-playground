const CRDTs = require('delta-crdts')

CRDTs.define('mvreg2', require('./mvreg'))

const Mvreg = CRDTs('mvreg2')

const r1 = Mvreg('r1')

console.log('r1-0', r1.value(), r1.state())

r1.write('a')

console.log('r1-1', r1.value(), r1.state())

