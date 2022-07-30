function doubleChar(str) {
  // Your code here
  let arr = str.split('')
  let newArr = []
  arr.forEach(element => {
    newArr.push(element+element)
  });
  let newStr = newArr.join('')
  return newStr
}