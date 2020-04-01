const Sequelize = require('sequelize')
const dataBase = require('../database')

module.exports = DaBank = dataBase.define('dabank', {
    bank: {
        type: Sequelize.STRING
      },
      accessToken: {
        type: Sequelize.STRING
    }
})