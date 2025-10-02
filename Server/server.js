const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3003;

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  ); // gives the access to your current directory..

  console.log(filePath);

  const extName = String(path.extname(filePath)).toLowerCase();

  const mineTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javaScript",
    ".png": "text/png",
  };

  const contentType = mineTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "content-Type": contentType });
        res.end("404: File Not Found");
      }
    } else {
      res.writeHead(200, { "content-Type": contentType }); // for successfull response
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
