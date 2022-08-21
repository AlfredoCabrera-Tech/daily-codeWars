function printerError(s) {
  let badOnes = 0

  let sArr = s.split('')
  sArr.forEach(letter => {
    switch(letter){
      case "n":
      case "o":
      case "p":
      case "q":
      case "r":
      case "s":
      case "t":
      case "u":
      case "v":
      case "w":
      case "x":
      case "y":
      case "z":
        badOnes++
       break;
      default:
        break;
    }
  })
  return `${badOnes}/${sArr.length}`
}

printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
printerError("aaabbbbhaijjjm")
printerError("aaaxbbbbyyhwawiwjjjwwm")