// Num = numerator分子，Den = denominator分母
// (fnNum(1) / fnDen(1)) + ... + (fnNum(i) / fnDen(i))
function calSeries (i, fnNum, fnDen) {
  if (i === 1) {
    return fnNum(i) / fnDen(i)
  }

  return fnNum(i) / fnDen(i) + calSeries(i - 1, fnNum, fnDen)
}

module.exports = {
  calSeries
}