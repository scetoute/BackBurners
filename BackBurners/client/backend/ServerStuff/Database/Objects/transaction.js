const Sequelize = require('sequelize')
const dataBase = require('../database')

module.exports = Trans = dataBase.define('transaction', {
    name: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.STRING
    },
    accountId: {
        type: Sequelize.STRING
    },
    category: {
        type: Sequelize.STRING
    }
})