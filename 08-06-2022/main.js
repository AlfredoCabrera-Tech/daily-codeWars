function otherAngle(a, b) {
  let c = 180 - (a+b)

  if((a+b)>180){
    return 'Error, angles too large'
  } if((a+b)<180){
    return c
  }
}
