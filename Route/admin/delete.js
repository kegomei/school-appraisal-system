const { Action } = require('express-route-auto')

class Delete extends Action {
  get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      path: {
        body: 'body/admin.html'
      }
    })
  }
  post (req, res, next) {
    res.send('this is post::Delete')
  }
}

module.exports = new Delete()
