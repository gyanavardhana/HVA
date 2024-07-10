const http = require("http");
const fs = require('fs');
const path = require('path');
const server = http.createServer((req,res) =>{
    if(req.url == '/'){
        const filepath = path.join(__dirname,'public','Index.html');
        fs.readFile(filepath,(err,data)=>{
            if(err){
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 404
                res.end("File not Found");
            }
            res.setHeader('Content-Type', 'text/html');
            res.statusCode=200;
            res.end(data);
        })
    }
})
const port = 3000;
server.listen(port,()=>{
    console.log(`server listening on ${port}`);
})