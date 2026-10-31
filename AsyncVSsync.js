console.log("nodeJS");

setTimeout(()=>{
           console.log("express");
},2000);
console.log("psql");


const fs = require('fs')

// fs.readFile("text/sahil .txt ","utf-8",(error , data)=>{
//     if(error){
//         return false
//     }
//     console.log(data);
// })

const data = fs.readFileSync("text/sahil .txt ", "utf-8");
console.log(data);


console.log("end script");
