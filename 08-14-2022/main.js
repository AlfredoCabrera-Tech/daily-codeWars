function count (string) {  
  // The function code should be here
  let result = {}

  if(string.length!=0){
    string.split('').map(element => {
      if(result[element]){
        result[element] += 1
      } if(!result[element]){
        result[element] = 1
      }
    })
    return result
  } else{
    return {};
  }
}
