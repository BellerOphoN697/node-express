var http=require('http');
var dt=require('./module1');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("date and time is "+dt.dateTime())
    res.end();
}).listen(8080);