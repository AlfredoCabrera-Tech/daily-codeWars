const alphabet = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0
}

function isPangram(string){
  const innerAlphabet = {...alphabet}

  let cleanString = string.replace(/[^a-zA-Z]/g, '').toLowerCase()
  
  let strArr = cleanString.split('')

  for(let i=0; i<strArr.length; i++){
    innerAlphabet[strArr[i]]++
  }

  return !Object.values(innerAlphabet).includes(0)
}

isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("This is not a pangram.")

/* A cleaner way to do it would be:
*/
const alphabeto = 'abcdefghijklmnopqrstuvwxyz'

const isIt = (string) => {
  return alphabeto.split('').every(x => string.toLowerCase().includes(x))
}

console.log(isIt("The quick brown fox jumps over the lazy dog."))
console.log(isIt("The over the lazy dog."))