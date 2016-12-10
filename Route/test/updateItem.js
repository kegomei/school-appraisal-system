const { Action } = require('express-route-auto')

class UpddateItem extends Action {
  constructor () {
    super()
    this.Item = this.Model.Item
    this.sequelize = this.Model.sequelize
  }
  _get (req, res, next) {
    let { infoMap } = this.Libs
    this.Item
      // 获取注释
      .getComment()
      // 替换参数
      .then(data => {
        return data.map(val => {
          return { [val.COLUMN_COMMENT]: val.COLUMN_NAME }
        })
        .reduce((pre, now) => Object.assign(pre, now))
      })
      // 生成需要更新的参数列表
      .then(data => {
        return infoMap.map(item => item.keys
          .map(key => {
            return {[key]: item.params.map(param => data[param])}
          }))
          .reduce((pre, now) => pre.concat(now))
      })
      // 生成sql 数据和条件
      .then(data => {
        let regx = /[A-Z]\.[0-9]+\.[0-9]+/g
        return data.map(val => {
          let item = Object.keys(val).toString()
          let code = item.match(regx)[0]
          let normName = item.split(regx)[1].trim()
          return Object.assign({
            options: {
              where: {
                code,
                normName
              }
            }},
            {
              data: val[item]
                .map(data => ({[data]: 1}))
                .reduce((pre, now) => Object.assign(pre, now))
            })
        })
      })
      // 更新 items 表
      .then(data => {
        return Promise.all(data.map((item, index) => {
          return this.Item
            .update(item.data, item.options)
            .then(data => {
              return [data, item, index]
            })
        }))
      })
      // 页面渲染
      .then(data => res.send(data))
      // 捕获错误
      .catch(err => {
        console.error(err)
        res.send(err)
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

}

module.exports = new UpddateItem()
