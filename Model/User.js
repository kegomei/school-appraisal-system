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
      department: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
        }
      },
      account: {
        type: Sequelize.STRING(255),
        defaultValue: '0',
        validate: {
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
        }
      }
    }, {
      timestamps: true
    })
  }

  // 通过部门名字找到 uid
  findUid (department) {
    return this.find({
      where: {
        department
      }
    })
    .then((row) => {
      return row.get('id')
    })
  }

  isExisted (obj) {
    return this.find({
      where: obj
    })
      .then((data) => {
        return data
      })
  }
}

module.exports = User
