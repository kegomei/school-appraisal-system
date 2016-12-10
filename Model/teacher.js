const Sequelize = require('sequelize')
const Model = require('./Model')

class Teacher extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('teacher', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: true
        }
      },
      'name': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'jobNumber': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'titleLevel': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'department': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'jobTitle': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'teacherType': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'remarksLevel': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'jobSeries': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'job': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'jobRank': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'entryTime': {
        type: Sequelize.STRING(255),
        defaultValue: '',
        validate: {
        }
      },
      'departmentId': {
        type: Sequelize.INTEGER,
        defaultValue: ''
      }
    }, {
      timestamps: true
    })
  }
}

module.exports = Teacher
