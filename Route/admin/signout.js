const { Action } = require('express-route-auto')

class Signout extends Action {
  _get (req, res, next) {
    delete req.session.user
    res.redirect('/')
  }
  _post (req, res, next) {
    res.send('this is post::Signout')
  }
}

module.exports = new Signout()
