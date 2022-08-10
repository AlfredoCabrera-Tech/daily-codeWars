function persistence(num) {
  //code me

  let numArr = String(num).split('').map(element => Number.parseInt(element))
  let resultArr = []
  let result = 0
  
  if(numArr.length === 1){
    return 0
  } else{
    let i = 0
    
    while (numArr.length!=1){
      
      //reduce que devuelve un numero
      //paso ese numero a array usando el metodo de arriba
      //hacerlo hasta que el numero devuelto sea menor que 10 o que, en su forma de array, su length sea 1
      
      result = numArr.reduce((ac, cu) => ac*cu,1)
      resultArr = String(result).split('')
      numArr = [...resultArr]
      if(numArr.length===1){
        return i+1
      }
      i++
    }
  }
}
