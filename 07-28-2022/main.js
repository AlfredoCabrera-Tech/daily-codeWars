function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classAverage = classPoints.reduce((acc, cu) => acc+cu,0)/classPoints.length
  return yourPoints>classAverage
}