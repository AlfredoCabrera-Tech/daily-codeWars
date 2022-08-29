// complete the function
function solution(string) {
  let strArr = string.split('')
  let spaces = strArr.filter(space => space === ' ')

  if(spaces.length!=0){
    return string
  } if(spaces.length === 0){
    let upperIndexes = []
    strArr.map((letter, i) => letter===letter.toUpperCase() && upperIndexes.push(i)) 
    //console.log(`Before: ${upperIndexes}`)

    if(upperIndexes.length>0){  
      for (let i=0; i<upperIndexes.length; i++) {
        upperIndexes.splice(i, 1, upperIndexes[i]+i)        
      }
      //console.log(`After: ${upperIndexes}`)      
      for(let i=0; i<upperIndexes.length; i++){
        strArr.splice(upperIndexes[i],0,' ')
      }
      return strArr.join('')
      //console.log(strArr.join(''))
    } else{
      return string
    }
  }
}


solution('camelCasing')
solution('camelCasingTest')
solution('camel Casing Test')
