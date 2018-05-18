var http=require('http')
var server=http.createServer(serverfunction)

function serverfunction(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("THis is the url js created")
    res.write("<br>")
    res.write(req.url)
    res.end()
}
server.listen(8080)