function lovefunc(flower1, flower2){
  // moment of truth
  let flow1 = (flower1%2)
  let flow2 = (flower2%2)
  
  if(flow1===0 && flow2===0){
    return false
  } if(flow1!=0 && flow2!=0){
    return false
  } else {
    return true
  }
}
