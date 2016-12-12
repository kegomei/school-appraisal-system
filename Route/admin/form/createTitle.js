const { Action } = require('express-route-auto')

class CreateTitle extends Action {
  _get (req, res, next) {
    res.send('404 Not Found')
  }
  _post (req, res, next) {
    let History = this.Model.History
    let { id } = req.session.user
    let { title } = req.body
    History
      .isExisted({
        title,
        uid: id
      })
      .then(data => {
        if (!data) {
          return History.insert({
            title,
            uid: id
          })
        } else {
          res.send({
            status: 304,
            msg: '已存在该考核'
          })
          return Promise.reject()
        }
      })
      .then(data => {
        res.send({
          status: 200,
          msg: '创建成功'
        })
      })
      .catch(err => res.status(500).send(err))
  }
}

module.exports = new CreateTitle()
