function solve(s){
  let strArr = s.split('')
  let counter = 0
  let resultArr = []
  
  strArr.forEach(letter => letter===letter.toUpperCase() ? counter++ : counter--)

if(counter>0){
  resultArr = strArr.map(letter => letter.toUpperCase())
} if(counter<=0){
  resultArr = strArr.map(letter => letter.toLowerCase())
}
return resultArr.join('')
}