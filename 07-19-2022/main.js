function find_average(array) {
  if(array.length == 0){
    return 0;
  } else{
      let sum = array.reduce((ac,cu) => ac + cu,0)
      return sum/array.length
  }
}
