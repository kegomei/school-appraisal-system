const { Action } = require('express-route-auto')

class Index extends Action {
  _get (req, res, next) {
    let History = this.Model.History
    let whereOpts = {}
    let { role } = req.session.user
    if (role === 0) {
      whereOpts = {
        where: {
          uid: req.session.user.id
        }
      }
    }
    History
      .findAll(whereOpts)
      .then((data) => {
        res.render('Layer', {
          body: req.path,
          user: req.session.user,
          lists: data,
          page: {
            body: 'body/admin.html',
            panel: '../page/index.html',
            siderbar: {
              active: 0
            }
          }
        })
      })
      .catch((err) => {
        console.error(`数据库查询错误: ${err}`)
        res.render('Layer', {
          body: req.path,
          user: req.session.user,
          lists: [],
          page: {
            body: 'body/admin.html',
            panel: '../page/index.html',
            siderbar: {
              active: 0
            }
          }
        })
      })
  }
  _post (req, res, next) {
    res.send('this is post::index')
  }
}

module.exports = new Index()
