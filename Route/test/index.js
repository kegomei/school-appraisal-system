const { Action } = require('express-route-auto')

class Index extends Action {
  constructor () {
    super()
    this.User = this.Model.User
  }
  get (req, res, next) {
    res.render('Layer', {
      title: req.path,
      path: {
        body: 'body/test.html'
      }
    })
  }

  post (req, res, next) {
    let data = req.body
    if (data) {
      res.send(data.name)
    } else {
      res.status(500).send('no data post!')
    }
  }
}

module.exports = new Index()
