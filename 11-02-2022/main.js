const basicTest = require('../basicTest')

function nPlus(n){
  let sum = 0
  for(let i=(n-1); i>0; i--){
    sum += i
  }
  return sum
}

function rowSumOddNumbers(n) {
	let sum = 0
  for(let i=nPlus(n); i<nPlus(n+1); i++){
    sum += (2*i)+1
  }
  return sum
}

//basicTest(rowSumOddNumbers(1), 1);
basicTest(rowSumOddNumbers(42), 74088);