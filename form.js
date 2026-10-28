const http = require('http');
const fs = require('fs')
http.createServer((req , res)=>{

    fs.readFile("html/form.html", 'utf-8', (error , data)=>{
        if(error){
            res.end("Internal Server error")
            return;
        }
        res.writeHead(200, {"content-type": "text/html "})
            if(req.url =='/'){
                res.write(data);
            }else if (req.method == 'POST' && req.url == '/submit'){
                   res.write('data submit')
            }
            res.end()
    })

}).listen(5000)
