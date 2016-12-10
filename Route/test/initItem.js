const { Action } = require('express-route-auto')
const Excel = require('excel-class')
const path = require('path')

class InitItem extends Action {
  constructor () {
    super()
    this.Item = this.Model.Item
    this.sequelize = this.Model.sequelize
  }
  _get (req, res, next) {
    let excel = new Excel(path.join(this.APP_PATH, '3.xlsx'))
    let obj = excel.readSheet('附件1')
    this.transformData(obj)
      .then((ids) => {
        console.log(ids)
        res.send(ids)
      })
      .catch(err => {
        console.error(err)
      })
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
    let regx = /[A-Z]\.[0-9]+\.[0-9]+/g
    let cidMap = Array(46).fill(1)
      .concat(Array(71).fill(2))
      .concat(Array(28).fill(3))
      .concat(Array(23).fill(4))
      .concat(Array(9).fill(5))
    let promiseArr = obj.map((data, index) => {
      let code = data['指标名称'].match(regx)[0]
      let normName = data['指标名称'].split(regx)[1].trim()
      return {
        code,
        normName,
        cid: cidMap[index]
      }
    })
    .map(data => this.Item.insert(data))

    return Promise.all(promiseArr)
  }
}

module.exports = new InitItem()
