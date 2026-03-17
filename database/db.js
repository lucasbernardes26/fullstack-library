const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('api_fullstack', 'root', 'alunolab',{
    host: 'localhost',
    port: '3303',
    dialect: 'mysql'
});

module.exports = sequelize