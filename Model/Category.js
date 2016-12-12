const Sequelize = require('sequelize')
const Model = require('./Model')

class Category extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('category', {
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
      }
    }, {
      timestamps: true
    })
  }
}

module.exports = Category
