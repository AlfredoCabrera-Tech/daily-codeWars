function removeEveryOther(arr){
  let oddArr = []
  
  for (let i=0; i<arr.length; i++){
    if(i%2 === 0){
      oddArr.push(arr[i])
    }
    //return arr
  }
  console.log(oddArr)
}

removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])