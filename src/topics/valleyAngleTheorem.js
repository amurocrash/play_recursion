// 角谷定理
function vat(num) {
  if (num === 1) {
    return 1
  }

  if (num % 2 === 0) {
    return 1 + vat(num / 2)
  } else {
    return 1 + vat(num * 3 + 1)
  }

}

module.exports = {
  vat
}