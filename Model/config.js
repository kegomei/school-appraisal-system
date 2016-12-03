module.exports = {
  database: 'schoolsystem',
  user: 'root',
  passwd: 'ctyloading',
  options: {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  }
}
