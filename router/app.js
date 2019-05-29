const http = require("http");
const fs = require("fs");

http
  .createServer(function(req, res) {
    fs.readFile("./history.html", function(err, data) {
      if (err) {
        console.log(err);
        res.end("err");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(9999, "127.0.0.1");
