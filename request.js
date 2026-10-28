const http = require('http');

http.createServer((req , res)=>{
    console.log(req.method);
    if(req.url == "/"){
       res.write('Home Page')
    }
    else if (req.url == "/login") {
        res.write("please login")
    }else{
        res.write("Unknown Page")
    }

        res.end()

}).listen(port)