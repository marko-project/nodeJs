//async  Setup Pattern
//refactor function 17

const { readFile, writeFile } = require("fs")
// another option : const { readFile, writeFile } = require("fs").promises
// then change only readfilepromise/writefilepromise -> to readfile/writefile
// and these columns are not needed:  
//    const util = require("util");
//    const readFilePromise = util.promisify(readFile);
//    const writeFilePromise = util.promisify(writeFile);


// to setup function without the wrapper function
const util = require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


// compare to logic 12-modules-fs-async
const start = async()=>{
  try {
    const first = await readFilePromise("./content/first.txt", 'utf8');
    const second = await readFilePromise("./content/second.txt", 'utf8');
    await writeFilePromise('./content/result.txt', `This is awesome: ${first} ${second}`)
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start()

// these two functions become obsolete
  // const getText = (path) => {
  //     return new Promise ((resolve, reject)=>{
  //         readFile(path, 'utf8', (err, data) => {
  //           if (err) {
  //             reject(err);
  //           } else {
  //             resolve(data)
  //           }
  //         });
          
  //     })
  // }

  // own wrapper function
//invoke getText
//getText('./content/first.txt')
//.then(result => console.log(result))
//.catch(err => console.log(err))