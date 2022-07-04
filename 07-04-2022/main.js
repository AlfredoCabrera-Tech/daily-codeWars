function squareDigits(num){
  let arr = num.toString().split('')
  let arrSq = arr.map( number => Math.pow(number,2))
  let result = parseInt(arrSq.join(''))
  return result
}


