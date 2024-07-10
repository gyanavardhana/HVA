
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
        res.statusCode=200;
        res.end('Home page');
    }

    if(req.url == '/about'){
        res.statusCode=200;
        res.end('Hello, my name is gyanavardhan');
    }


    if(req.url == '/contact'){
        res.statusCode=200;
        res.end("You can email me at gyanavardhanmamidisetti@gmail.com")
    }
});


server.listen(3000,()=>{
    console.log("server listening on 3000")
})