function findNextSquare(sq) {
  
  if(((Math.sqrt(sq))%1)===0){
    let done = false
    //let i = 0

    while(!done){
      if(Math.sqrt(sq+1)%1===0){
        done = true
        return sq+1
      } else{
        sq++
      }
    }
  } else{
    return -1;
  }
}