const fs = require("fs");

// fs.writeFile("message.txt","Hello from node", function(err){
//     if(err) throw err;
//     console.log("The file is saved");
// })

fs.readFile("message.txt", "utf8", (err, data)=> {
    if(err) throw err;
    console.log(data);
})