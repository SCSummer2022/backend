let sequelize = require('sequelize');

const Sequelize = new sequelize.Sequelize('sqlite::memory:');

module.exports = {
    sequelize: Sequelize
}