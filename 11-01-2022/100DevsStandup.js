function stringTransformer(str) {
  let strArr = str.split(' ')
  let revStrArr = strArr.reverse()
  
  let caseRevStrArr = revStrArr.map(word => {
    let wordArr = word.split('')

    wordArr.map((letter, index) => {
      if(letter===letter.toLowerCase()){
        wordArr[index] = letter.toUpperCase()
      } if(letter===letter.toUpperCase()){
        wordArr[index] = letter.toLowerCase()
      }
    })
    return wordArr.join('')
  })
  return caseRevStrArr.join(' ')
}

stringTransformer('string Example')

const cases = (str) => {
  let strArr = str.split('')

  strArr.map((letter, index) => {
    if(letter===letter.toLowerCase()){
      this[index] = letter.toUpperCase()
    } if(letter===letter.toUpperCase()){
      this[index] = letter.toLowerCase()
    }
  })
  return strArr.join('')
}

cases('craZy')
cases('LOCA')
cases('Cleo')