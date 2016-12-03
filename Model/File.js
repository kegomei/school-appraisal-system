const Sequelize = require('sequelize')
const Model = require('./Model')

class File extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('file', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: true
        }
      },
      rid: {
        type: Sequelize.INTEGER,
        validate: {
          isInt: true
        }
      },
      tmpname: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      originname: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      type: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      }
    }, {
      timestamps: true
    })
  }
}

module.exports = File
