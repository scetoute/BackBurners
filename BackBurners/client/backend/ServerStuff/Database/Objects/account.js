const Sequelize = require('sequelize')
const dataBase = require('../database')

module.exports = Account = dataBase.define('account', {
    accountId: {
        type: Sequelize.STRING,
    },
    currentBal: {
        type: Sequelize.INTEGER,
    },
    availableBal: {
        type: Sequelize.INTEGER,
    },
    name: {
        type: Sequelize.STRING,
    }
})