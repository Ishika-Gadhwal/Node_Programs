

var fs = require("fs");

var buf = new Buffer.alloc(1024);

console.log("\nGoing to open an Existing File ");
fs.open('input2.txt','r+',function(err,data){
    if(err){
        return console.error(err);
    }

    console.log("File Opened Successfully");
    
    //Truncate the Opened File
    console.log("\nGoing to truncate the file after 10 bytes");
    fs.ftruncate(data, 10, function(err){
        if(err){
            return console.error(err);
        }
        console.log("File truncated successfully.");
    });

    console.log("\nGoing to read the file!");
    fs.read(data,buf,0,buf.length, 0,function(err,bytes){
        if(err){
            console.log(err);
        }

        console.log(bytes+" bytes Read");

        if(bytes>0){
            console.log(buf.toString());
        }

        // Close the Opened file
        fs.close(data, function(err){
            if(err){
                return console.error(err);
            }
            console.log("\nFile Closed Successfully");
        });
    });
});