function firstNonConsecutive (arr) {
  let i=0
  let resultArr = []
  
  while(i<arr.length){
    if(arr[i+1]===(arr[i]+1)){
      i++
    } if(arr[i+1]!=(arr[i]+1)){
      resultArr.push(arr[i+1])
      i++
    }
  }

  if(resultArr.length != 0 && resultArr[0] || resultArr[0]===0){
    return Number.parseInt(resultArr[0])
  } if(resultArr.length === 0 || !resultArr[0]){
    return null
  }
}
