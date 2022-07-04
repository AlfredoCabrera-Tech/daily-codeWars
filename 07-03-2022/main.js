function squareSum(numbers){
  let result = numbers.reduce((ac,cu) => (cu*cu)+ac,0)
  return result
}
