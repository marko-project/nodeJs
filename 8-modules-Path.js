// apth module
const path = require('path')
const filePath = path.join('/constent', 'text.txt')
const base = path.basename(filePath)
const absolute = path.resolve(__dirname, 'content', 'test.txt')

console.log(path.sep)
console.log(filePath)
console.log(base)
console.log(absolute)