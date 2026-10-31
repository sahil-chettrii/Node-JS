const fs = require('fs');

fs.writeFileSync("files/apple.txt", "This is a fruit");
fs.writeFileSync("files/orange.txt", "This is a fruit");

fs.unlinkSync("files/orange.txt");


fs.appendFileSync("files/apple.txt","and this is very good for health")

const data = fs.readFileSync("files/apple.txt","utf-8");
console.log(data);




//terminal //


console.log(process.argv[2]);   

const opration = process.argv[2];

if (opration == "write"){
 const name = process.argv[3];
  const content  = process.argv[4];
        
fs.writeFileSync("files/"+name, content)

}
 else if (opration == "read"){
 const name = process.argv[3];
 let data = fs.readFileSync("files/"+name,"utf-8")
 console.log(data);
   
}

  else if (opration == "update") {
    const name = process.argv[3];
    const content = process.argv[4];

    fs.writeFileSync("files/" + name, content);
    console.log("File updated successfully");
}

else if (opration == "delete") {
    const name = process.argv[3];

    fs.unlinkSync("files/" + name);

    console.log("File deleted successfully");
}
