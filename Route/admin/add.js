const { Action } = require('express-route-auto')

class Add extends Action {
  _get (req, res, next) {
    let History = this.Model.History
    let { id } = req.session.user
    History
      .findAll({
        where: {
          uid: id
        }
      })
      .then(historyList => {
        res.render('Layer', {
          body: req.path,
          user: req.session.user,
          historyList,
          page: {
            body: 'body/admin.html',
            panel: '../page/add.html',
            siderbar: {
              active: 1
            }
          }
        })
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
  _post (req, res, next) {
    res.send('this is post::Add')
  }
}

module.exports = new Add()
