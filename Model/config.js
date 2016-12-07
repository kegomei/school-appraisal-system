module.exports = {
  database: 'schoolsystem',
  user: 'root',
  passwd: 'looading',
  options: {
    host: 'refs.ctyloading.cn',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
