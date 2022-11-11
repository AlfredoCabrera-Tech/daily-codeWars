const basicTest = require('../basicTest')

function findOdd(A) {
  //happy coding!
  let Elements = {}
  let result = 0

  A.forEach(element =>{
    Elements[element] ? Elements[element]++ : Elements[element]=1
  })

  for (const number in Elements) {
    if ((Elements[number]%2)!=0){
      result=number
    }
  }

  return parseInt(result)
}

basicTest(findOdd([7]), 7);
basicTest(findOdd([0]), 0);
basicTest(findOdd([1,1,2]), 2);
basicTest(findOdd([0,1,0,1,0]), 0);
basicTest(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]), 4);
basicTest(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
basicTest(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
basicTest(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
basicTest(findOdd([10]), 10);
basicTest(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
basicTest(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);