var http=require('http')
var url=require('url')
var host=require("os")

var server= http.createServer(queryParamServer).listen(8080)

function queryParamServer(req,res){
    res.writeHead(200,{'content-Type':'text/html'})
    res.write("this is the query param js ")

    var myQuery=url.parse(req.url,true).query

    var query1=myQuery.name1
    var query2=myQuery.loc

    console.log(host.hostname())

    res.write("<br>")
    res.write(query1 + " " + query2)
    res.end()
}