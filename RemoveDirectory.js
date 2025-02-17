
// Create a directory using CreateDirectory.js code --> test1
var fs = require("fs");

console.log("Going to Delete the directory");

fs.rmdir('./test1',function(err){
    if(err){
        return console.error(err);
    }
    console.log("Directory Deleted Successfully");
});