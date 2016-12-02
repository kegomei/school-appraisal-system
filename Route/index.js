const { Action } = require('express-route-auto')

class Index extends Action {
  get (req, res, next) {
    res.render('Layer', {
      body: 'hello world'
    })
  }
  post (req, res, next) {
    res.send('this is post::index')
  }
}

module.exports = new Index()
