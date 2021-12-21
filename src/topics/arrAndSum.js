// 数组[1...n](n < 50)，整数m，能使数组中任意几个的和为m，输出true，反之false
function arrAndSum(arr, m) {
  arr = arr.filter(n => n <= m)
  // realArrAndSum(arr, arr.length - 1, m)
  realArrAndSum2(arr, 0, m)
  return flag
}

let flag = false
// n是数组最后一位index
function realArrAndSum(arr, n, m) {
  if (arr[n] === m) {
    flag =  true
    return
  }

  if (n === 0) {
    return
  }

  realArrAndSum(arr, n - 1, m - arr[n]) // 取了当前n的值，在剩下的n - 1中去找m - arr[n]
  realArrAndSum(arr, n - 1, m) // 没取当前n的值，在剩下的n - 1中去找m
}

// i是数组的第一位
function realArrAndSum2(arr, i, m) {
  if (arr[i] === m) {
    flag = true
    return
  }

  if (i === arr.length - 1) {
    return
  }

  realArrAndSum2(arr, i + 1, m - arr[i]) // 取
  realArrAndSum2(arr, i + 1, m) // 不取
}

module.exports = {
  arrAndSum
}