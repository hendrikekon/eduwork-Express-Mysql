const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect:'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Hendrik--250197',
    database: 'eduwork-crud-v2'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;