var httpVariable=require('http')
var myserver=httpVariable.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/html'})
    response.write("Hello from node server!!")
    response.end
})
myserver.listen(8080)