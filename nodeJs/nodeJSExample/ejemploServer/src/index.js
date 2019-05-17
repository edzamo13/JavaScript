const http = require('http');

/*
// Create an HTTP tunneling proxy
const proxy = http.createServer((req, res) => {
    res.write('<h1> Curso de Node </h1>')
    res.end
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('okay');
  });
*/

const proxy = http.createServer((req, res) => {
    //res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.writeHead(400, { 'Content-Type': 'application/json' });
/*
    res.setHeader('Content-Type','application/json');
    res.statusCode=301;
*/
    if (req.method === 'GET') {
        res.write('<h1> Metodo no permitido</h1>');
        return res.end();
    }

    res.write('<h1> Curso de Node</h1>');
    res.end();

})


proxy.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Eror', err);
    }

    console.log('Server abierto en http://localhost:8000');
});