const basicTest = require('../basicTest')

function factorial(n){
  if(n>=1 && n<=12){
    let arr = []
    
    for(let i=n; i>=1; i--){
      arr.push(i)
    }

    let result = arr.reduce((ac,cu) => ac*cu)

    return result

  } if(n===0){
    return 1
  }  if (n<0 || n>12) {
    throw new RangeError("The argument must be between 0 and 12");
  }
}

basicTest(factorial(0), 1) //, "factorial for 0 is 1");
basicTest(factorial(1), 1) //, "factorial for 1 is 1");
basicTest(factorial(2), 2) //, "factorial for 2 is 2");
basicTest(factorial(3), 6) //, "factorial for 3 is 6");
basicTest(factorial(-3), 6) //, "factorial for 3 is 6");
basicTest(factorial(15), 6) //, "factorial for 3 is 6");
basicTest(factorial(9), 6) //, "factorial for 3 is 6");