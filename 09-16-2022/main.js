function getCount(str) {
  //let resultArr = []
  let strArr = str.split('')
  let vowels = ['a','e','i','o','u']

  let resultArr = strArr.filter(letter => vowels.includes(letter))

  return resultArr.length
}