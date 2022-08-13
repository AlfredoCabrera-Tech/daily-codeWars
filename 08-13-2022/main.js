function oddOrEven(array) {
  //enter code here
  return (array.reduce((ac,cu) => ac+cu,0)%2 === 0)? 'Even' : 'Odd'
}