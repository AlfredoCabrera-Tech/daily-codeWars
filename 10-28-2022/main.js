const basicTest = require('../basicTest')

function calculateYears(principal, interest, tax, desired) {
  let current = principal
  let years = 0

  for(let i=1; current<desired; i++){
    current += ((current*interest)-((current*interest)*tax))
    years = i
  }
  return years
}

basicTest(calculateYears(1000, 0.05, 0.18, 1100), 3)
basicTest(calculateYears(1000,0.01625,0.18,1200), 14)
basicTest(calculateYears(1000,0.05,0.18,1000), 0)