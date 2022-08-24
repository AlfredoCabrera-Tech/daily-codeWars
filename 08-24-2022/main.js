function findShort(s){
  let sArr = s.split(' ').sort((a,b) => a.length-b.length)

  return sArr[0].length
}