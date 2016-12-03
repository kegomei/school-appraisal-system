const { Action } = require('express-route-auto')

class Add extends Action {
  get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      path: {
        body: 'body/admin.html'
      }
    })
  }
  post (req, res, next) {
    res.send('this is post::Add')
  }
}

module.exports = new Add()
