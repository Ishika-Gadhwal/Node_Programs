const http = require("http")

const server = http.createServer((req, res) => {

    res.writeHead(200, {"content-type" : "text/plain"});
    res.end("Welcome to the World of Nodejs");
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log("Server is running on the port:" ,PORT);
});