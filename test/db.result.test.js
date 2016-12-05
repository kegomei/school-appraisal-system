const assert = require('assert')
const chai = require('chai')
const DataBase = require('../Model')
const _ = require('lodash')


let { Result } = new DataBase()

describe('查询所有数据',() => {
  it('找出所有uid=1 的数据', () => {
    Result
      .findAll({
        where: {
          uid: 4
        }
      })
      .then((data) => {
        console.error(JSON.stringify(data))
        assert.equal(true, _.isArray(data))
      })
  })
})