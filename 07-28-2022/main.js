function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classAverage = 0
  let sum = classPoints.forEach(note => {sum += note})
  classAverage = sum/Array.length
  if(yourPoints > classAverage){
    return true
  } else{
   return false
  }
}