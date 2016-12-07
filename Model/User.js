const Sequelize = require('sequelize')
const Model = require('./Model')

class User extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('user', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: true
        }
      },
      name: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      account: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
          isUnique: this.seqli.validateIsUnique('openid')
        }
      },
      passwd: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      role: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: true
        }
      }
    }, {
      timestamps: true
    })
  }

  isExisted (obj) {
    return this.find(obj)
      .then((data) => {
        return data
      })
  }
}

module.exports = User
