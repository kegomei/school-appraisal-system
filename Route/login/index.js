const { Action } = require('express-route-auto')

class Index extends Action {

  _get (req, res, next) {
    console.log('this is a get')
    res.render('Layer', {
      body: req.path,
      page: {
        body: 'body/login.html'
      }
    })
  }
  _post (req, res, next) {
    let User = this.Model.User
    let { account, passwd } = req.body

    User.isExisted({
      where: {
        account,
        passwd
      }
    })
    .then((data) => {
      if (data) {
        req.session.user = {
          department: data.get('department'),
          account: data.get('account'),
          id: data.get('id'),
          role: data.get('role')
        }
        res.send({
          status: 200,
          msg: '登录成功',
          url: '/admin'
        })
      } else {
        res.send({
          status: 404,
          msg: '帐号或密码不正确'
        })
      }
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send({
        msg: '数据库查询错误'
      })
    })
  }
}

module.exports = new Index()
