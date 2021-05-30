//FS modules
//ASYNC PAttern
const {readFile, writeFile} = require('fs')
console.log('start');
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
         console.log('done w/ tasl')
     })
   })
})

console.log('start next task')