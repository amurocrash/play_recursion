// 最大公约数 greatest common divisor
// 6, 3
const gcd = (m, n) => {
  if (m % n === 0) {
    return n
  }

  return gcd(n, m % n)
}

module.exports = {
  gcd
}