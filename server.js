const http = require('http');
http.createServer((req , res)=>{
res.end("welcome from server")
}).listen(3000)