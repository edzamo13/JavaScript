const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const setting = require('dotenv').config();



const SETTINGS = setting
console.log('SETTING log', SETTINGS)

//exports.app2 = dato => dato * 2


exports.app = (app) => {
    app.disable('x-powered-by')

    app.set('env', SETTINGS.parsed.ENV)
    app.set('config', SETTINGS.parsed)
    app.locals.env = app.get('env')
    app.locals.config = app.get('config')

    if (process.env.NODE_ENV !== 'test') {
        app.use(logger('combined'))
    }

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))

    app.use(cors())
}

