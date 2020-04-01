const Sequelize = require('sequelize')
const dataBase = require('../database')
const crypto = require('crypto');
const Budget = require('./budget');

module.exports = USER = dataBase.define('USER', {
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    passWord: {
        type: Sequelize.STRING,
        get() {
            return () => this.getDataValue('passWord');
        }
    },
    firstAndLastName: {
        type: Sequelize.STRING
    },
    phoneNumber: {
        type: Sequelize.STRING
    },
    _id: {
        type: Sequelize.STRING
    },
    sugarAndSpice: {
        type: Sequelize.STRING,

        get() {
            return () => this.getDataValue('sugarAndSpice');
        }
    }
})

USER.prototype.isCorrectPassword = function(candidatePwd) {
    return USER.encryptPassword(candidatePwd, this.sugarAndSpice) === this.password;
};
  
USER.createBudget = function() {
    return Budget.create({ userId: this._id });
};

USER.generatesugarAndSpice = function() {
    return crypto.randomBytes(16).toString('base64');
};

USER.encryptPassword = function(plainText, sugarAndSpice) {
return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(sugarAndSpice)
    .digest('hex');
};


const setsugarAndSpiceAndPassword = USER => {
    if (USER.changed('password')) {
        USER.sugarAndSpice = USER.generatesugarAndSpice();
        USER.password = USER.encryptPassword(USER.password, USER.sugarAndSpice);
    }
};

USER.beforeCreate(setsugarAndSpiceAndPassword);
USER.beforeUpdate(setsugarAndSpiceAndPassword);