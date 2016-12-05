const { Action } = require('express-route-auto')

class Delete extends Action {
  _get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      path: {
        body: 'body/admin.html'
      }
    })
  }
  _post (req, res, next) {
    res.send('this is post::Delete')
  }
}

module.exports = new Delete()
