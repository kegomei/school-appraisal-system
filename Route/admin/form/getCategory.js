const { Action } = require('express-route-auto')

class GetCategory extends Action {
  _post (req, res, next) {
    let Category = this.Model.Category
    let { hid } = req.body
    req.session.user['hid'] = hid
    Category
      .findAll()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send(err)
      })
  }
}

module.exports = new GetCategory()
