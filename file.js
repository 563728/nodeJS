var http=require('http')
var file=require('fs')
var server=http.createServer(fileserver).listen(8080)

function fileserver(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("file system using node")

    file.readFile("india.html",function(err,data){
        res.write("<br>")
        res.write(data)

        file.writeFile("adhi.html",data,function(err){
            console.log(data);
        })

        res.end()

    })
}