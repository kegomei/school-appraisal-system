const Sequelize = require('sequelize')
const dbConfig = require('./config')
require('sequelize-isunique-validator')(Sequelize)

// 连接数据库
var sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.passwd, dbConfig.options)

// 获取表
const User = new (require('./User'))(sequelize)
const File = new (require('./File'))(sequelize)
const Result = new (require('./Result'))(sequelize)
const Teacher = new (require('./Teacher'))(sequelize)
const Item = new (require('./Item'))(sequelize)
const History = new (require('./History'))(sequelize)
const Category = new (require('./Category'))(sequelize)

class DataBase {
  constructor () {
    this.User = User
    this.File = File
    this.Result = Result
    this.sequelize = sequelize
    this.Teacher = Teacher
    this.Item = Item
    this.History = History
    this.Category = Category
    sequelize
      .authenticate()
      .then(function (data) {
        console.log('Connection has been established successfully.')
      })
      .catch(function (err) {
        console.log('Unable to connect to the database:', err)
      })
  }
}

module.exports = DataBase
