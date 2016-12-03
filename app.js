const express = require('express')
const debug = require('debug')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const winston = require('winston')
const expressWinston = require('express-winston')
const formidable = require('express-formidable')

const configs = require('./config')
const { config, Generate } = require('express-route-auto')

config.add(configs)
let pathLog = debug('path')
let appLog = debug('myapp::applog')

let app = express()

// 正常请求的日志
app.use(expressWinston.logger({
  transports: [
    // new (winston.transports.Console)({
    //   json: true,
    //   colorize: true
    // }),
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

// 权限控制
app.use((req, res, next) => {
  let whiteList = [ '/', '/login', '/signout', '/test', '/test/upload' ]
  appLog('session: %s, url: %s, In whiteList? : %s', req.session.user, req.url, whiteList.indexOf(req.url))
  if (req.session.user) {
    next()
  } else {
    if (whiteList.indexOf(req.url) === -1) {
      res.redirect('/login')
    } else {
      next()
    }
  }
})

// 文件上传处理模块
app.use(formidable({
  encoding: 'utf-8',
  uploadDir: 'Uploads',
  multiples: true // req.files to be arrays of files
}))

// 生成路由
let generate = new Generate()
app.use(generate())

// 错误请求的日志
app.use(expressWinston.errorLogger({
  transports: [
    // new winston.transports.Console({
    //   json: true,
    //   colorize: true
    // }),
    new winston.transports.File({
      filename: 'Logs/error.log'
    })
  ]
}))

// 错误页面
app.use((err, req, res, next) => {

  if (err) {
    console.log(err)
    res.status(500).send({
      msg: 'Server Error 500'
    })
  }
})

app.listen(4000, () => {
  console.info('server iss running on 4000')
})
