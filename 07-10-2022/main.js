const countSheep = function (num){
  let numArr = []
  for(let i=0; i<num; i++){
    numArr.push(`${i+1} sheep...`)
  }
  let numStr = numArr.join('')
  return numStr
}