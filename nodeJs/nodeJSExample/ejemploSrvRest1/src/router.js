const user = require('../routes/me')
const music = require('../routes/music')
const auth = require('../routes/auth')


exports.app = (app) => {
    app.use(user);
    app.use(music);
    app.use(auth);
   }





