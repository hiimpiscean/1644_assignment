const http = require("http") //init http module
const host = "localhost"
const port = 3000
const web = http.createServer((req, res) =>
{
    res.end("Test");
})
web.listen(port)