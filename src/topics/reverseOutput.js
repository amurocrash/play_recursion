function reverseOutput(data) {
  let arr = []
  if (typeof data === 'string') {
    arr = Array.from(data)
  } else if (typeof data === 'number') {
    arr = Array.from(data.toString())
  } else {
    arr = data
  }

  const r = realReverse(arr, arr.length - 1)
  if (typeof data === 'number') {
    return parseInt(r.toString())
  } else {
    return r
  }
}

function realReverse(arr, i) {
  if (i === 0) {
    return arr[i]
  }

  return arr[i] + realReverse(arr, i - 1)
}

module.exports = {
  reverseOutput
}