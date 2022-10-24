String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  const strArr = this.split('')
  const resultArr = strArr.map(letter => {
    if(letter===letter.toLowerCase()){
      return letter.toUpperCase()
    } if(letter===letter.toUpperCase()){
      return letter.toLowerCase()
    } if(letter!== letter.toLowerCase() && letter!== letter.toUpperCase()){
      return letter
    }
  })
  return resultArr.join('')
}