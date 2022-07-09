function zeroFuel(distanceToPump, mpg, fuelLeft) {
  let distance = mpg*fuelLeft
  if(distance < distanceToPump){
    return false
  }else if(distance >= distanceToPump){
    return true
  }
}