const { Action } = require('express-route-auto')
const Excel = require('excel-class')
const path = require('path')
const keyMap = {
  'name': '姓名',
  'jobNumber': '工号',
  'titleLevel': '职称级别',
  'department': '部门',
  'jobTitle': '职称',
  'teacherType': '教师类型',
  'remarksLevel': '备注等级',
  'jobSeries': '岗位系列',
  'job': '岗位',
  'jobRank': '岗位等级',
  'entryTime': '来校年月'
}

class InitTeacher extends Action {
  constructor () {
    super()
    this.User = this.Model.User
    this.Teacher = this.Model.Teacher
  }
  _get (req, res, next) {
    let excel = new Excel(path.join(this.APP_PATH, 'teacher.xls'))
    let obj = excel.readSheet('Sheet1')
    this.handleData(obj)
      .then(data => Promise.all(data.map(val => this.Teacher
        .insert(val)
        .then((data) => {
          return data
        }))))
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.error(err)
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

  handleData (data) {
    let res = data
      .map((val, index, arr) => Object
          .keys(keyMap)
          .map((item, index) => {
            return {[item]: val[keyMap[item]]}
          })
          .reduce((pre, after) => Object.assign(pre, after))
      )

    let allPromies = []
    for (let i = 0; i < res.length; i++) {
      let item = res[i]
      allPromies.push(((item) => {
        return this.User
          .findUid(item.department)
          .then((uid) => {
            item['departmentId'] = uid
          })
      })(item))
    }
    return Promise.all(allPromies)
      .then(() => {
        return res
      })
  }

}
module.exports = new InitTeacher()
