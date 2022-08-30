// write the function isAnagram
const isAnagram = function(test, original) {
  let different = 0
  let testArr = test.toLowerCase().split('')
  let originalArr = original.toLowerCase().split('')

  for(let i=0; i<testArr.length; i++){
    originalArr.includes(testArr[i]) || different++
  }
  for(let i=0; i<originalArr.length; i++){
    testArr.includes(originalArr[i]) || different++
  }
  
  if(different===0 && test.length===original.length){
    return true
  } else{
    return false
  }
};

