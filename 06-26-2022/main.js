function getMiddle(s){
  let sArr = s.split('')
  let sArrLength = sArr.length
  let half = sArr.length / 2
  let lower = Math.floor(half)

  if(sArrLength % 2 === 0){
    return sArr[(half - 1)] + sArr[half]
  } else{
    return sArr[lower]
  }
}
