const fs = require('fs')
const os = require('os')

const {log,warn} = require('console')


fs.writeFileSync("test.txt", "trying with modules")
console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

log("custome log")
log("node js is fun")

warn("i hate ai bruh")