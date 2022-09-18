function minMax(arr){
  return arr.length>1 ? resultArr = arr.filter(number => number===Math.min(...arr) || number===Math.max(...arr)).sort((a,b) => a-b) : [...arr, ...arr]
}