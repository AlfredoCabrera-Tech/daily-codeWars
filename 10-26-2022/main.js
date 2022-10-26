const basicTest = require("../basicTest")

const quarterOf = (month) => {
  let remainder = 12-month
  if(remainder>=9){
    return 1
  }
  if(remainder>=6){
    return 2
  }
  if(remainder>=3){
    return 3
  }
  if(remainder<3){
    return 4
  }
}

basicTest(quarterOf(3), 1)
basicTest(quarterOf(8), 3)
basicTest(quarterOf(11), 4)