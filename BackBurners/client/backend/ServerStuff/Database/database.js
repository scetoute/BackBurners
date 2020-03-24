const Sequelize = require('sequelize')

const databaseName = earmark + Date.now()
const dataBase = new Sequelize(process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`, { logging: false })
module.exports = dataBase;