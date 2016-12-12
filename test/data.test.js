const assert = require('assert')
const chai = require('chai')
const DataBase = require('../Model')
const _ = require('lodash')
const { transformData } = require('../Libs').transform
const util = require('util')

let { Category } = new DataBase()

describe('transform Data::edit', () => {
  it('should retuen a Array', () => {
  return  Category
      .find({
        where: {
          id: 1
        }
      })
      .then((data) => {
        let res = transformData(data)
        console.log(util.inspect(res))
        assert.equal(true, _.isArray(res))
      })
      .catch(err => {
        assert.ok(err)
      })
  })
})