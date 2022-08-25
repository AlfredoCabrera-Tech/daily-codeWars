function highAndLow(numbers){
  let resultArr = []
  let numbersArr = numbers.split(' ')
  numbersArr.sort((a,b) => a-b)

  resultArr.push(numbersArr[(numbersArr.length)-1], numbersArr[0])

  let result = resultArr.join(' ')
  
  return result
}
