const basicTest = require('../Tests/basicTest')

function longest(s1, s2) {
  const strArr = []

  s1.split('').sort().forEach(letter => strArr.push(letter))

  let resultArr = strArr.filter((letter, index, self) => self.indexOf(letter)===index )

  s2.split('').sort().forEach(letter => {
    if(!resultArr.includes(letter)){
      resultArr.push(letter)
    }
  })

  return resultArr.sort().join('')
}
//longest('hello')

basicTest(longest("aretheyhere", "yestheyarehere"), "aehrsty")
basicTest(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
basicTest(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")