function twoSum(numbers, target) {
  //target - number[i] = numbers[j]?
  let resultArr = []

  for( let i=0; i<numbers.length; i++){
    for( let j=0; j<numbers.length; j++){
      if((numbers[i]+numbers[j])===target){
        if(i!=j){
          resultArr.push(j)
          resultArr.push(i)
        }
      }
    }
  }
  return resultArr.slice(0,2)

}


twoSum([2,3,1], 4)