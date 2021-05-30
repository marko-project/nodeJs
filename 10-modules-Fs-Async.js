//FS modules

// destructre from modu
// const fs = require('fs')
const {readFile, writeFile} = require('fs')
//calback functions

readFile('./content/first.txt','utf8' ,(err, result) =>{
    if(err){
        console.log(err)
        return
    }
   const first = result
   readFile("./content/second.txt", "utf8", (err, result)=> {
     if (err) {
       console.log(err);
       return;
     }
     const second = result
     writeFile('./content/result-sync.txt',` ABC, ${first}, ${second}`, (err, result) =>{
         if(err){
             console.log(err)
             return
         }
         console.log(`A: ${result}`)
     })
   })
})

