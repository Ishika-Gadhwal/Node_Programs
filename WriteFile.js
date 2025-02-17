

var fs = require("fs");

console.log("Going to write into existing file");
// If file doesn't exists it will create a new file and if it exists it will Overwrite all Content
fs.writeFile('input1.txt',"Ganpati Bappa Morya!!!",function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Data written successfully!");
});

// Now read the file Content
fs.readFile('input1.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous Read: "+data.toString());
});