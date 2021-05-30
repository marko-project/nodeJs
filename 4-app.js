//common js 
//modules- encapsuled code (only share minimum)

const names = require('./2-name')
const sayHi = require('./3-function')

const data = require('./5-alternative')
console.log(names)
console.log(data)


sayHi('bob')
sayHi(names.name2)
sayHi(names.name3)

// runs the code
require('./6-mindgrenade')


