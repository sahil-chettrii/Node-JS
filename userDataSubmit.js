const querystring = require('querystring');
function userDataSubmit(req, res) {

       let databody = [];
                req.on('data',(chunk)=>{
                  databody.push(chunk);
                });

    req.on('end',()=>{
        let rawdata = Buffer.concat(databody).toString();
        let readdata = querystring.parse(rawdata);
        console.log(readdata);
        let datastring = " my name is " + readdata.name + ' and my email is ' + readdata.email;
             console.log(datastring);
    })            

    res.writeHead(200, {
    "Content-Type": "text/html"
});

res.write(`
    <h1>You can get data from user form here</h1>
`);

res.end();
}

module.exports = userDataSubmit;