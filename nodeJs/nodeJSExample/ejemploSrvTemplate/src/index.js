const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.disable('x-powered-by');
app.set('evn', 'development');
//app.use(morgan());
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');







app.get('/', (req, res) => {
    res.render('home', {
        title: 'Setec',
        message: 'Curso de NodeJs - Home'
    })
    res.end()
});

app.get('/temario', (req, res) => {
    res.render('temario', {
        title: 'Setec',
        message: 'Temario del curso NodeJS'
    })
    res.end()
});






app.listen('9000', () => {
    console.log('Servidor NodeJS en la ruta http://localhost:9000')
})