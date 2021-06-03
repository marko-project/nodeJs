// perform non blocking I/O Operations despite the fact taht js is single threaded
// check nodejs.dev
//2:30:00

//--> check cource-api.com


// async code
const { readFile } = require("fs");
console.log("start first task");
readFile("./content/first.txt", "utf8", (err, result) => {  // when result or err comes back we invoke the callback
  if (err) {
    console.log(err);
    return;
  }
  console.log(result)
  console.log('completed first task')
});

console.log("start next task");