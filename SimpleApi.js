const http = require('http');

const userData = [
    {
        name : 'sahil',
        age : 22,
        role : 'backend developer'
    },
      {
        name : 'sam',
        age : 25,
        role : 'Frontend developer'
    },
      {
        name : 'hitler',
        age : 30,
        role : 'tester'
    }

]

http.createServer((req,res)=>{

res.setHeader("Content-Type" , "application/Json")
res.write(JSON.stringify(userData));
res.end();
}).listen(5000)