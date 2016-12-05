const { Action } = require('express-route-auto')

class Add extends Action {
  _get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      user: req.session.user,
      page: {
        body: 'body/admin.html',
        panel: '../page/add.html',
        siderbar: {
          active: 1
        }
      }
    })
  }
  _post (req, res, next) {
    res.send('this is post::Add')
  }
}

module.exports = new Add()
