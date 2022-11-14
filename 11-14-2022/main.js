const basicTest = require('../basicTest')

function duplicateCount(text){
  let textArr = text.split('')
  let letters = {}
  
  textArr.forEach(letter => {
    if(letters[letter.toLowerCase()]){
      letters[letter.toLowerCase()]++
    } if(!letters[letter.toLowerCase()]){
      letters[letter.toLowerCase()] = 1
    }
  })

  let result = 0

  for( item in letters){
    if(letters[item]>1){
      result++
    }
  }

  return result
}



basicTest(duplicateCount(""), 0);
basicTest(duplicateCount("abcde"), 0);
basicTest(duplicateCount("aabbcde"), 2);
basicTest(duplicateCount("aabBcde"), 2,"should ignore case");
basicTest(duplicateCount("Indivisibility"), 1)
basicTest(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent");