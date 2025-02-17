

var fs = require("fs");

fs.unlink('input4.txt',function(err){
    if(err){
        return console.error(err);
    }
    console.log("File deleted successfully!");
});