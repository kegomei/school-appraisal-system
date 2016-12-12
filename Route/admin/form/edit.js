const { Action } = require('express-route-auto')
const _ = require('lodash')
class Edit extends Action {
  _get (req, res, next) {
    let { transformData } = this.Libs.transform
    let { cid } = req.query
    req.session.user['cid'] = cid
    let { Category, Item } = this.Model
    let categoryName
    Category
      .find({
        where: {
          id: cid
        }
      })
      .then(data => {
        console.log(data)
        if (data) {
          categoryName = data.name
          return Item
            .findAll({
              where: {
                cid
              },
              attributes: {
                exclude: ['createdAt', 'updatedAt', 'deletedAt']
              }
            })
        } else {
          res.send('没有该指标类别')
          return Promise.reject()
        }
      })
      .then(data => {
        if (data) {
          res.render('Layer', {
            formItemMap: transformData(data),
            categoryName,
            page: {
              body: 'body/admin.html',
              panel: '../page/edit.html',
              siderbar: {
                active: 1
              }
            }
          })
        } else {
          res.send('该类别下不存在指标')
        }
      })
      .catch(err => res.status(500).send(err))
  }

  _post (req, res, next) {
  }
}

module.exports = new Edit()
