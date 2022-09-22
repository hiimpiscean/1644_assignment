const http = require("http") //init http module
const fs = require("http")
const web = http.createServer((req, res) =>
{
    res.setHeader("application-header", "text/html");
    res.write("<h1 style='color:blue;text-align:center;'>Test</h1>");
    res.end();
})
web.listen(3000)