var httpVariable=require('http')
var date=require('./dateLibrary')

var myserver=httpVariable.createServer(function(request,response){
    response.writeHead(200,{'content-Type':'text/html'})
    response.write("Hello from node server!!")

    var cd=date.myDate();
console.log(cd);
    response.end()
})
myserver.listen(8080)