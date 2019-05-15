var http = require('http');

var host = "127.0.0.1"
var port = 3000

var server = createServer((req, res)=>{
res.writeHead(200, {"content-Type": "text/plain"});
console.log("server Working");
res.end("server working");
});

server.listen(port,host, (error) => { 
if(error)
{ 
  return console.log("Error occured :", error);
}
console.log('server is listening on ${port} and port ${host}');
});
