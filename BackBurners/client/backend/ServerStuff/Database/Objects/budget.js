const Sequelize = require('sequelize')
const dataBase = require('../database')

module.exports = Budget = dataBase.define('budget', {
    income: {
        type: Sequelize.INTEGER
    },
    savings: {
        type: Sequelize.INTEGER
    },
    spendingBudget: {
        type: Sequelize.INTEGER
    },
    munchies: {
        type: Sequelize.INTEGER,
    defaultValue: 350
    },
    travelling: {
        type: Sequelize.INTEGER,
    defaultValue: 1000
    },
    healthcare: {
        type: Sequelize.INTEGER,
    defaultValue: 300
    },
    service: {
        type: Sequelize.INTEGER,
    defaultValue: 150
    },
    shopping: {
        type: Sequelize.INTEGER,
    defaultValue: 300
    }
})