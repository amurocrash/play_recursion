// 计算某个数字的各位之和
function sumDigit(num) {
  if (num === 0) {
    return 0
  }
  
  return num % 10 + sumDigit(Math.floor(num / 10))
}

module.exports = {
  sumDigit
}