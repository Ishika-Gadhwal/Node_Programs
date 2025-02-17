

var fs = require("fs");

console.log("Going to get file info!");
fs.stat('input.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log(data);
    console.log("Got file info successfully!");

    console.log("isFile?: "+data.isFile());
    console.log("isDirectory?: "+data.isDirectory());
});