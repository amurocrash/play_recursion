const { gcd } = require('./topics/gcd')
const { permutation } = require('./topics/permutation')
const { calSeries } = require('./topics/series')
const { reverseOutput } = require('./topics/reverseOutput')
const { countChar } = require('./topics/countChar')
const { sumDigit } = require('./topics/sumDigit')
const { number2String } = require('./topics/number2String')
const { vat } = require('./topics/valleyAngleTheorem')
const { climb } = require('./topics/climb')

function testPermutation() {
  const arr =['1', '2', '3', '4']
  const r = permutation(arr)
  console.log(r)
}

function testGcd() {
  console.log(gcd(124, 24))
}

function testSeries() {
  console.log(calSeries(2, () => 1, i => i))
  console.log(calSeries(2, i => i, i => 2 * i + 1))
}

function testReverse() {
  const str = '12345'
  console.log(reverseOutput(str))

  const arr = ['1', '2', '3', '4', '5']
  console.log(reverseOutput(arr))

  const num = 12345
  console.log(reverseOutput(num))
}

function testCountChar() {
  console.log(countChar('hello ll lalala', 'l'))
}

function testSumDigit() {
  console.log(sumDigit(5222))
}

function testNum2String() {
  console.log(number2String(123456789))
}

function testVat() {
  console.log(vat(22))
}

function testClimb() {
  console.log(climb(4))
}

// testPermutation()
// testGcd()
// testSeries()
// testReverse()
// testCountChar()
// testSumDigit()
// testNum2String()
// testVat()
testClimb()