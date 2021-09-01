const http = require("http");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname,"01vue.html");
const app = http.createServer();


app.on("request",(req,res) => {
    console.log(req);
    fs.readFile(file, function(err, data){
        res.end(data);
    });
}).listen(3000);