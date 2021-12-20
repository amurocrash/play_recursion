function climb(N) {
  if (N === 1) {
    return 1
  }

  if (N === 2) {
    return 2
  }

  return climb(N - 1) + climb(N - 2)
}

module.exports = {
  climb
}