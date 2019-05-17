
const http = require('http');
const fs = require('fs');
const path = require('path');


const file = './src/index.html'



const proxy = http.createServer((req, res) => {

    /*//   
      */


    let filePath = req.url
    if (filePath === '/') {
        filePath = 'index.html'
    }
    filePath = `./src/${filePath}`
    const extname = path.extname(filePath);

    let contentType
    switch (extname) {
        case '.css':
            contentType = 'text/css'
            break;
        case '.html':
            contentType = 'text/html'
            break;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset:UTF-8' })
    fs.readFile(file, (err, content) => {
        if (err) {
            return console.log(err)
        }

        res.write(content)
        res.end()
    });


});


proxy.listen(8000, 'localhost', err => {
    if (err) {
        return console.log('Error:', err);
    }

    console.log('Server abierto en http://localhost:8000');
});