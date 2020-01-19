const http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  
  fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    } else{
        res.end(html)
    }
})})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
