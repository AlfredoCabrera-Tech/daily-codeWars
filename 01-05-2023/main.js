function distinct(a) {
  let resultArr = a.filter((letter, index, self) => self.indexOf(letter)===index )
  return resultArr;
}