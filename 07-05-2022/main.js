let number = function(busStops){
  // Turns every array into one, long, single array
  let oneArr = busStops.flat(Infinity)
  // Every even index is positive, every odd index is negative
  for (let i = 0; i < oneArr.length; i++) {
    if(i % 2 === 0 || i === 0){
      oneArr[i] = oneArr[i]
    } else{
      oneArr[i] = oneArr[i] * -1
    }    
  }
  let result = oneArr.reduce((ac,cu) => ac + cu,0)
  return result
}