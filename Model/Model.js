// const Sequelize = require('sequelize')

class Model {
  constructor (seqli) {
    this.seqli = seqli
  }

  // 插入数据
  insert (...obj) {
    return this.model
      .sync({ force: false })
      .then((model) => {
        return model
          .create(...obj)
      })
  }

  /**
   * findAll
   */
  findAll (...obj) {
    return this.model
      .findAll(...obj)
  }

  /**
   * findOne
   */
  findOne (...obj) {
    return this.model
      .findOne(...obj)
  }

  /**
   * findById
   */
  findById (...obj) {
    return this.model
      .findById(...obj)
  }

  /**
   * find
   */
  find (...obj) {
    return this.model
      .find(...obj)
  }

  /**
  * drop
  */
  drop (...obj) {
    return this.model
      .drop(...obj)
  }

  /**
  * count
  */
  count (...obj) {
    return this.model
      .count(...obj)
  }

  /**
  * update or insert
  */
  upsert (...obj) {
    return this.model
      .upsert(...obj)
  }

  /**
  * update
  */
  update (...obj) {
    return this.model
      .update(...obj)
  }

  /**
  * destory
  */
  delete (...obj) {
    return this.model
      .destroy(...obj)
  }

  /**
  * bulkCreate 创建多条记录
  */
  bulkCreate (...obj) {
    return this.model
      .bulkCreate(...obj)
  }
}
module.exports = Model
