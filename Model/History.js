const Sequelize = require('sequelize')
const Model = require('./Model')

class History extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('history', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: true
        }
      },
      title: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      uid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
        }
      }
    }, {
      timestamps: true
    })
  }
}

module.exports = History
