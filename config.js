const DataBase = require('./Model')

let { User, File, Result, sequelize, Teacher, Item, History, Category } = new DataBase()
let Libs = require('./Libs')

module.exports = {
  // routeDir 是必须的
  routeDir: '/Route',
  // APP_PATH 也是必须的，是模块获取到根目录路径
  APP_PATH: __dirname,

  Libs,

  Model: {
    User,
    File,
    Result,
    sequelize,
    Teacher,
    Item,
    History,
    Category
  }
}
