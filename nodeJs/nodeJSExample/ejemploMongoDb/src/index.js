const mongoose = require('mongoose') ;

const host = 'mongodb://127.0.0.1:27017/films';

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

const conn = mongoose.createConnection(host,
    { poolSize: 200 });

conn.on('error', err => {
    console.log('Erro', err)
    return ProcessingInstruction.exit()
})

conn.on('connected', () => console.log('Conectado a mongoDb'));

const filmSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, trim: true, required: true },
    poster: { type: String, trim: true, required: true }
}, {
        strict: false
    }
);

const Film = conn.model('Film', filmSchema);

const newDocument = new Film({
    _id: new mongoose.Types.ObjectId(),
    title: 'Start wars: the las Jedi',
    poster: 
    'http://www.viax.cl/wp-content/uploads/2017/10/star-wars-last-jedi-trailer-video.jpg'
});

newDocument.save(err => {
    if (err) {
        throw err
    }

    console.log('Almacendado')
});