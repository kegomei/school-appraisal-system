const { Action } = require('express-route-auto')
// const fs = require('fs')
const xlsx = require('xlsx')
const util = require('util')
const path = require('path')


class Upload extends Action {
  constructor () {
    super()
    this.User = this.Model.User
    this.File = this.Model.File
  }
  get (req, res, next) {
    res.render('Layer', {
      title: req.path,
      path: {
        body: 'body/test.html'
      }
    })
  }

  post (req, res, next) {
    let File = this.File
    let tmparr = req.files['looading'].name.split('.')
    let suffix = tmparr[tmparr.length - 1]
    let whiteFileList = ['xlsx']
    console.log(suffix)
    console.log(tmparr)
    if (whiteFileList.indexOf(suffix) !== -1) {
      console.log(util.inspect(xlsx.readFile(path.join(this.APP_PATH, req.files['looading'].path))))
      File.insert({
        tmpname: req.files['looading'].path,
        originname: req.files['looading'].name,
        type: req.files['looading'].type
      })
      .then((result) => {
        res.send(result)
      })
      .catch((err) => {
        res.send(err)
      })
    } else {
      res.send(`${req.files['looading'].name} isn't a excel file`)
    }
  }
}

module.exports = new Upload()
