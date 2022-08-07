function bouncingBall(h,  bounce,  window) {
  /* Defining necessary variables */
  let result = 1

  /* Satisfying the 3 conditions */
  // Condition for h
  if(h<=0){
    result = -1
    return result
  } 
  // Condition for  bounce
  if(bounce<0 || bounce>=1){
    result = -1
    return result
  }
  // Condition for window
  if(window >= h){
    result = -1
    return result
  } 

  // Special case for 1 bounce
  if(Math.ceil((h*bounce)/window) === 1){
    result = 1
    return result
  } 
  else { 
    result += Math.ceil((h*bounce)/window)
    return result
  }
}

bouncingBall(3.0, 0.66, 1.5)
bouncingBall(30.0, 0.66, 1.5)
bouncingBall(3.0, 1.0, 1.5)
bouncingBall(30, 0.66, 1.5)
bouncingBall(30, 0.75, 1.5)
