

var fs = require("fs");

console.log("Going to create directory temp/test");

fs.mkdir('./test',function(err){
    if (err) {
        return console.error(err);
    }
    console.log("Directory created successfully!");
});