const http = require('http')


//Using event emitter API
const server = http.createServer();
server.on('request',(request,response)=>{
    response.end("welcome");
})

server.listen(5000);