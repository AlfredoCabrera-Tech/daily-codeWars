const basicTest = require('../basicTest')

const correctDate = (date) => {
  const dateParts = date.split(' ')
  const day = dateParts[1].slice(0,-1)
  const month = dateParts[0]
  const year = dateParts[2]
  return `${year}-${month}-${day}`
}
//console.log(correctDate('September 45, 2014'))

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  let current = new Date(correctDate(currentDate))
  let expiration = new Date(correctDate(expirationDate))
  //console.log({current, expiration, validDate:(current<=expiration), validCode:(enteredCode===correctCode)})

  if(enteredCode===correctCode && current<=expiration){
    return true
  } else {
    return false
  }
}

basicTest(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true)
basicTest(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false)