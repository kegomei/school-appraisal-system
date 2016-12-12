const _ = require('lodash')
const util = require('util')

// 删除无效数据
function transformData (data) {
  return data
    .map(item => {
      return _.omitBy(item.dataValues, (val) => {
        return val === 0
      })
    })
}


module.exports = {
  transformData
}
