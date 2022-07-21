function reverseWords(str) {
  let strArr = str.split(' ')
  let revArr = strArr.map(word => {
   return word.split('').reverse().join('')
  })
  let revStr = revArr.join(' ')
  return revStr
}