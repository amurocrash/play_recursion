// 整数转string 123
function number2String(num) {
  if (num === 0) {
    return ''
  }

  const remain = num % 10 + ''
  return number2String(Math.floor(num / 10)) + remain
}

// function realNumber2String(num) {
//   if (num === 0) {
//     return ''
//   }

//   const remain = num % 10
//   return realNumber2String(num / 10) + remain + ''
// }

module.exports = {
  number2String
}