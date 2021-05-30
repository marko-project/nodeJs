//FS modules async vs sync
console.log('start')
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");


//created file if not existing
writeFileSync("./content/result-sync.txt", `${first}, ${second}`);

console.log('done');
console.log('start next task');