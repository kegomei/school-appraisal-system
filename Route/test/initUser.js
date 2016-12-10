const { Action } = require('express-route-auto')
const Excel = require('excel-class')
const path = require('path')
const py = require('pinyin')

class InitUser extends Action {
  constructor () {
    super()
    this.User = this.Model.User
  }
  _get (req, res, next) {
    let excel = new Excel(path.join(this.APP_PATH, 'teacher.xls'))
    let obj = excel.readSheet('Sheet2')
    this
      .transformData(obj)
      .forEach((val, index) => {
        this.User
          .insert(val)
          .then((id) => {
            console.log(id)
          })
          .catch(e => {
            console.error(e)
          })
      })
    res.send(this
      .transformData(obj))
  }

  _post (req, res, next) {
    let data = req.body
    if (data) {
      res.send(data.name)
    } else {
      res.status(500).send('no data post!')
    }
  }

  transformData (obj) {
    return obj.map(val => {
      let o = {
        department: val['部门'],
        passwd: py(val['部门'], {
          style: py.STYLE_FIRST_LETTER
        }).join('') + 2016,
        account: py(val['部门'], {
          style: py.STYLE_FIRST_LETTER
        }).join('') + 2016
      }
      return o
    })
  }
}

module.exports = new InitUser()
