/*
Libreria doenv
para configura parametros
de conexiones
*/
const express = require('express');
const config = require('./config.js');
const router = require('./router.js')
const routerEjempo = require('../routes/me')

//console.log(`datos de app2: ${config.app2(2)}`);

let _server

exports.server = server = {

    start() {
        const app = express()

        config.app(app)
        //rutas
        //router.app(app)
       // app.use('/me',routerEjempo);
       router.app(app)




        _server = app.listen(app.locals.config.PORT, () => {
            const address = _server.address()
            const host = address.address === '::'
                ? 'localhost'
                : address
            const port = app.locals.config.PORT

            if (process.env.NODE_ENV != 'test') {
                console.log(`Server opened listen on http://${host}:${port}`)
            }
        })
        return _server
    },
    close() {
        _server.close()
    }
}


if (!module.parent) {
    server.start()
}


process.on('unhandledRejection', (err, p) => {
    console.log('Custom Error: An unhandledRejection occurred')
    console.log(`Custom Error: Rejection: ${err}`)
})
