const arrayTest = require('../Tests/arrayTest')

function sumDigPow(a, b) {
  let range = []
  for(let i=a; i<=b; i++){
    range.push(i)
  }

  let resultArr = []
  range.forEach(number => {
    let poweredNumber = 0
    let numberStrArr = number.toString().split('')
    let numberArr = numberStrArr.map(el => parseInt(el))
    for(let i=1; i<=numberArr.length; i++){
      poweredNumber += Math.pow(numberArr[(i-1)],i)
    }
    if(poweredNumber===number){
      resultArr.push(number)
    }
  })
  return resultArr
}

arrayTest(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
arrayTest(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
arrayTest(sumDigPow(10, 100),  [89])
arrayTest(sumDigPow(90, 100), [])
arrayTest(sumDigPow(90, 150), [135])
arrayTest(sumDigPow(50, 150), [89, 135])
arrayTest(sumDigPow(10, 150), [89, 135])