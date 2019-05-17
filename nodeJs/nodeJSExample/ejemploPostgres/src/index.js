const Sequelize = require('sequelize');

const sequelize = new Sequelize('films', 'postgres', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000

    }
});

const Film = sequelize.define(
    'Film',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            field: 'id',
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        poster: {
            type: Sequelize.STRING,
            field: 'poster'
        }
    },
    {
        freezeTableName: true
    }
);
Film.sync({ force: true })
    .then(() => Film.create({
        title: 'start wars: The Last Jedi',
        poster: 'http://www.viax.cl/wp-content/uploads/2017/10/star-wars-last-jedi-trailer-video.jpg'

    }));