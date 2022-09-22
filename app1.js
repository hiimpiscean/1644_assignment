const http = require("http") //init http module
const fs = require("fs")
http.createServer((req, res) =>
{
    if (req.url === "/")
    {
        fs.readFile("./test.html", (err, data) =>
            {
                if(err) console.log("Not found!")
                else res.end(data)
            }
        )
    }
    else if (req.url === "/test")
    {
        fs.readFile("./test1.html", (err, data) =>
            {
                if(err) console.log("Not found!")
                else res.end(data)
            }
        )
    }
    else
    {
        fs.readFile("./test1.html", (err, data) =>
            {
                if(err) console.log("Not found!")
                else res.end(data)
            }
        )
    }


})
    .listen(3000)