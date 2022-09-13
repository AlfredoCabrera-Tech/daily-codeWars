function isValidWalk(walk) {
  let x = 0
  let y = 0
  let distance = walk.length
  
  walk.forEach(item => {
    switch (item) {
      case 'n':
        y++  
        break;
      case 's':
        y--
        break;
      case 'e':
        x++
        break;
      case 'w':
        x--
        break;
      default:
        break;
    }
  })
  let displacement = Math.abs(x)+Math.abs(y)

  return (distance===10 && displacement===0)
}