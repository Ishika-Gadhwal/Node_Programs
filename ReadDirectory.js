

var fs = require("fs");

console.log("Going to read directory");

fs.readdir('./test', function(err,files){ //files is an array that stores all the file names in that Directory
    if(err){
        return console.error(err);
    }

    files.forEach(function(file){
        console.log(file);
    });
});