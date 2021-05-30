/**
 * OS
 * Path
 * FS
 * HTTP
 */


//NODE JS -> API DOCU in DOCS
//os module
const os = require('os')
const user = os.userInfo()
console.log(user)


//method return system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)

 const curentOs = {

    name: os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
 }

 console.log(curentOs)