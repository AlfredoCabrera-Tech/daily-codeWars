function findMultiples(integer, limit) {
  //your code here
  let resultArr= []

  for(let i=integer; i<=(limit+1); i++){
    if(((i/integer)%1)===0 && i!=(limit+1)){
      resultArr.push(i)
    }
    if(i===(limit+1)){
      return resultArr.sort((a,b) => a-b)
    }
  }
}