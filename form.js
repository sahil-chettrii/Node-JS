const http = require('http');

http.createServer((req , res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    if(req.url =='/'){
           res.write(`
        <form action="/submit" method="post">
        <input type='text' placeholder='enter name' name = "name"/>
        <input type='text' placeholder='enter name' name = "name"/>
        <button>Submit</button>
        </form>
        `);
    } else if(req.url =='/submit'){
        res.write('Data Submit')
    }

   
    res.end()
}).listen(5000)
