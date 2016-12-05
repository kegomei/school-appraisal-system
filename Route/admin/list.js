const { Action } = require('express-route-auto')

class List extends Action {
  _get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      path: {
        body: 'body/admin.html'
      }
    })
  }
  _post (req, res, next) {
    res.send('this is post::List')
  }
}

module.exports = new List()
