function dirReduc(arr){
  let up = 0
  let right = 0
  resultArr = []

  arr.forEach(word => {
    switch(word){
      case 'NORTH':
        up++
      break;
      case 'SOUTH':
        up--
        break;
      case 'EAST':
        right++
        break;
      case 'WEST':
        right--
        break;
      default:
        break;
    }
  })
  
  if(up>0){
    for(let i=0; i<up; i++){
      resultArr.push('NORTH')
    }
  }
  if(up<0){
    for(let i=0; i>up; i--){
      resultArr.push('SOUTH')
    }
  }
  if(right>0){
    for(let i=0; i<right; i++){
      resultArr.push('EAST')
    }
  }
  if(right<0){
    for(let i=0; i>right; i--){
      resultArr.push('WEST')
    }
  }
  return resultArr
}
