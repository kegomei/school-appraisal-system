const express = require('express')
const debug = require('debug')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const winston = require('winston')
const expressWinston = require('express-winston')

const configs = require('./config')
const { config, Generate } = require('express-route-auto')

config.add(configs)
let pathLog = debug('path')

let app = express()

// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    new (winston.transports.Console)({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'Logs/success.log'
    })
  ]
}))

// cookie
app.use(cookieParser('keyboard cat'))
// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true }
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 设置模板引擎
app.engine('.html', ejs.__express)
// app.engine('html', require('ejs-mate'))
app.set('view engine', 'html')
// 设置视图目录
app.set('views', path.join(__dirname, '/Template'))
// 设置公共资源目录
app.use(express.static(path.join(__dirname, '/Static')))

// 路由日志
app.use((req, res, next) => {
  pathLog(req.path)
  next()
})

// 生成路由
let generate = new Generate()
app.use(generate())

// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new winston.transports.File({
      filename: 'Logs/error.log'
    })
  ]
}))

app.listen(4000, () => {
  console.info('server iss running on 4000')
})
