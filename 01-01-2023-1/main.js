const ArrTest = require('../Tests/arrayTest')

function tribonacci(signature,n){
  //your code here
  let resultArr = [...signature]

  if(n===0){
    return []
  }

  if(n<3){
    return resultArr.slice(0,n)  
  }

/*   if(n===3){
    return resultArr
  } */

  for( let i=0; i<(n-3); i++){
    resultArr.push(resultArr[i]+resultArr[i+1]+resultArr[i+2])
  }
  return resultArr
}

ArrTest(tribonacci( [1,1,1], 10), [1,1,1,3,5,9,17,31,57,105]   )
ArrTest(tribonacci( [0,0,1], 10), [0,0,1,1,2,4,7,13,24,44]     )
ArrTest(tribonacci( [0,1,1], 10), [0,1,1,2,4,7,13,24,44,81]    )
ArrTest(tribonacci( [1,0,0], 10), [1,0,0,1,1,2,4,7,13,24]      )
ArrTest(tribonacci( [0,0,0], 10), [0,0,0,0,0,0,0,0,0,0]        )
ArrTest(tribonacci( [1,2,3], 10), [1,2,3,6,11,20,37,68,125,230])
ArrTest(tribonacci( [3,2,1], 10), [3,2,1,6,9,16,31,56,103,190] )
ArrTest(tribonacci( [1,1,1],  1), [1])
ArrTest(tribonacci([300,200,100], 0), [])