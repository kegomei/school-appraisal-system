const { Action } = require('express-route-auto')
// const fs = require('fs')
const xlsx = require('xlsx')
const formidable = require('formidable')
const path = require('path')
const util = require('util')


class Upload extends Action {
  constructor () {
    super()
    this.User = this.Model.User
    this.File = this.Model.File
  }
  _get (req, res, next) {
    res.render('Layer', {
      title: req.path,
      path: {
        body: 'body/test.html'
      }
    })
  }

  _post (req, res, next) {
    let File = this.File
    let form = new formidable.IncomingForm()
    form.encoding = 'utf-8'
    form.uploadDir = path.join(this.APP_PATH, 'Uploads')
    form.maxFieldsSize = 200 * 1024 * 1024
    form.maxFields = 10000
    form.parse(req, (err, fields, files) => {
      console.log(util.inspect(fields))
      let tmparr = files['looading'].name.split('.')
      let suffix = tmparr[tmparr.length - 1]
      let whiteFileList = ['xlsx']
      console.log(suffix)
      console.log(tmparr)
      if (whiteFileList.indexOf(suffix) !== -1) {
        // let workbook = xlsx.readFile(path.join(this.APP_PATH, files['looading'].path))
        File.insert({
          tmpname: files['looading'].path,
          originname: files['looading'].name,
          type: files['looading'].type
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
    }) 
  }
}

module.exports = new Upload()
