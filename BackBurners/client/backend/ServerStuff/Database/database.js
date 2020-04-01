const Sequelize = require('sequelize').Sequelize
const databaseName = "EarMark" + process.env.LOGNAME
const dataBase = new Sequelize(`mysql://localhost:3000/${databaseName}`)

module.exports = dataBase;