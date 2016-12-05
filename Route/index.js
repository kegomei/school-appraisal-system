const { Action } = require('express-route-auto')

class Index extends Action {
  _get (req, res, next) {
    res.render('Layer', {
      body: req.path,
      page: {
        body: 'body/index.html'
      }
    })
  }
  _post (req, res, next) {
    res.send('this is post::index')
  }
}

module.exports = new Index()
