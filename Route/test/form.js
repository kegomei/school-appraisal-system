const { Action } = require('express-route-auto')

class Form extends Action {
  constructor () {
    super()
    this.User = this.Model.User
  }
  _get (req, res, next) {
    res.render('Layer', {
      user: {
        name: '通信工程学院'
      },
      page: {
        body: 'body/admin.html',
        panel: '../page/add.html',
        siderbar: {
          active: 0
        }
      }
    })
  }

  _post (req, res, next) {
    let data = req.body
    if (data) {
      res.send(data.name)
    } else {
      res.status(500).send('no data post!')
    }
  }
}

module.exports = new Form()
