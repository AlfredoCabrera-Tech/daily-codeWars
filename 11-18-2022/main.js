const arrayTest = require('../Tests/arrayTest')

function race(v1, v2, g) {
  // your code
  if(v2<=v1){
    return null
  }
  let time = g/(v2-v1)
  let hours = (time-(time%1))
  let minutes = (((time%1)*60)-((time%1)*60)%1)
  let seconds = (((((time%1)*60)%1)*60)-((((time%1)*60)%1)*60)%1)

  return [hours, minutes, seconds]
}

arrayTest(race(720, 850, 70), [0, 32, 18])
arrayTest(race(80, 91, 37), [3, 21, 49])
arrayTest(race(80, 100, 40), [2, 0, 0])
arrayTest(race(720, 850, 37), [0, 17, 4])