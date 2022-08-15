function digPow(n, p){
  let nArr = []
  let toSumArr = []
  let digits = n.toString().split('')
  nArr = [...digits]
  let exp = p-1

  for(let i=0; i<nArr.length; i++){
    exp++
    toSumArr.push(Math.pow(nArr[i],exp))
  }
  let crazyTotal = toSumArr.reduce((ac,cu) => ac+cu,0)
  let k = crazyTotal/n

  if(k%1===0){
    return k
  } else{
    return -1
  }
}