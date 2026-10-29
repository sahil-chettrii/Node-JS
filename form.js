const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const querystring = require('querystring')
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
                let databody = [];
                req.on('data',(chunk)=>{
                    databody.push(chunk);
                });
                req.on('end',()=>{
                    let rawdata = Buffer.concat(databody).toString();
                    let readdata = querystring.parse(rawdata);
                    console.log(readdata);
                    
                })
                   res.write('data submit')
            }
            res.end()
    })

}).listen(5000)
