const jwt = require('jwt-simple');



module.exports = auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res
            .status(403)
            .send({ message: 'No autorized' })
    }
    const token = req.headers.authorization.split(' ')[1]
    const decode = jwt.decode(token, req.app.locals.config.TOKEN)
    req.user = decode.email
    console.log('req.user', req.user)
    next()

}