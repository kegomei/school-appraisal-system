const DataBase = require('./Model')

let { User, File, Result } = new DataBase()

module.exports = {
  // routeDir 是必须的
  routeDir: '/Route',
  // APP_PATH 也是必须的，是模块获取到根目录路径
  APP_PATH: __dirname,

  Model: {
    User,
    File,
    Result
  }
}
