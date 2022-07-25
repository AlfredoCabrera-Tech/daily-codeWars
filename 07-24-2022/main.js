function removeEveryOther(arr){
  let oddArr = []
  for (let i=0; i<arr.length; i++){
    if(i%2 === 0){
      oddArr.push(arr[i])
    }
  }
  return oddArr
}