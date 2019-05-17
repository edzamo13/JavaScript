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
    //  res.end('Hola Mundo Node Express!.')
    res.render('home', {
        title: 'Curso de Noje.Js',
        message: 'Mensaje primer Layout con variable'
    })
});

app.listen('9000', () => {
    console.log('Servidor NodeJS en la ruta http://localhost:9000')
})