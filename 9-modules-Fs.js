//FS modules


// destructre from modu
// const fs = require('fs')
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first, second)


//created file if not existing
writeFileSync('./content/result-sync.txt',`${first}, ${second}`)