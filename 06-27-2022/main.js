function positiveSum(arr) {
  let counter = 0
  arr.filter(num => num > 0).forEach(num => counter += num)
  return counter
}
