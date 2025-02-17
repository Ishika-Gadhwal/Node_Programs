

var fs = require("fs");

// open a file input.txt for reading and writing --> r+

console.log("Going to open file!");
fs.open('input.txt','r+',function(err,data){
    if(err){
        return console.log(err);
    }
    console.log("File opened successfully!");
});