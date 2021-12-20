function permutation(arr) {
  if (arr.length === 0) {
    return ['']
  }

  const result = []
  arr.forEach((n, index) => {
    const newArr = Array.from(arr)
    newArr.splice(index, 1)
    const next = permutation(newArr)
    next.forEach(nn => {
      result.push(n + nn)
    })
  })

  return result
}

module.exports = {
  permutation
}