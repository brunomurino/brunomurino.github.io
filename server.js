var http = require("http")
var fs = require("fs")
var path = require("path")

var server = http.createServer(function(req, res){

    console.log(`${req.method} request for ${req.url}`)

    if (req.url === "/" || req.url === "/index.html"){
        fs.readFile("./index.html", "utf-8", function(err, html) {
            res.writeHead(200, {"Content-Type":"text/html"})
            res.end(html)
        })
    } else if (req.url === "/whoami.html") {
        fs.readFile("./whoami.html", "utf-8", function(err, html) {
            res.writeHead(200, {"Content-Type":"text/html"})
            res.end(html)
        })   
    } else if (req.url === "/blindwalk") {
        fs.readFile("./blindwalk/index.html", "utf-8", function(err, html) {
            res.writeHead(200, {"Content-Type":"text/html"})
            res.end(html)
        })   
    } else if (req.url === "/clock") {
        fs.readFile("./clock/index.html", "utf-8", function(err, html) {
            res.writeHead(200, {"Content-Type":"text/html"})
            res.end(html)
        })   
    } else if (req.url === "/windsofsunset") {
        fs.readFile("./windsofsunset/index.html", "utf-8", function(err, html) {
            res.writeHead(200, {"Content-Type":"text/html"})
            res.end(html)
        })   
    } else if (req.url.match(/.css$/)) {

		var cssPath = path.join(__dirname, req.url)
		var fileStream = fs.createReadStream(cssPath, "UTF-8")

		res.writeHead(200, {"Content-Type": "text/css"})

		fileStream.pipe(res)

	} else if (req.url.match(/.jpg$/)) {

		var imgPath = path.join(__dirname, req.url)
		var imgStream = fs.createReadStream(imgPath)

		res.writeHead(200, {"Content-Type": "image/jpeg"})

		imgStream.pipe(res)

	} else if (req.url.match(/.js$/)) {

        var jsPath = path.join(__dirname, req.url)
        var jsStream = fs.createReadStream(jsPath)

        res.writeHead(200, {"Content-Type": "script/js"})

		jsStream.pipe(res)

    } else {
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.end("404 File Not Found")
    }
})

server.listen(3000)

console.log("Server listening on port 3000")