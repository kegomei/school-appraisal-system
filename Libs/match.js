function matchArray (arr, target) {
  for (let item of arr) {
    let regx = new RegExp(item)
    if (regx.test(target)) {
      return true
    }
  }
  return false
}

module.exports = {
  matchArray
}
