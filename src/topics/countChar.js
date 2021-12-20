// c在ctr中出现的次数
function countChar(str, c) {
  return realCountChar(str, c, 0)
}

function realCountChar(str, c, index) {

  if (index > str.length - 1) {
    return 0
  }

  if (str[index] === c) {
    return 1 + realCountChar(str, c, index + 1) 
  } else {
    return 0 + realCountChar(str, c, index + 1)
  }
}

module.exports = {
  countChar
}