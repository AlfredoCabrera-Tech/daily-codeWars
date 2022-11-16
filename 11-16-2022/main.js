const basicTest = require('../Tests/basicTest')

const sequenceSum = (begin, end, step) => {
  // May the Force be with you
  let resultArr = []

  if(begin>=end){
    return 0
  } if(begin<end){

    for(let i=0; begin<=end; i++){
      resultArr.push(begin)
      begin += step
    }
    let result = resultArr.reduce((ac,cu) => ac+cu)
    return result
  }
};

basicTest(sequenceSum(2, 6, 2), 12)
basicTest(sequenceSum(1, 5, 1), 15)
basicTest(sequenceSum(1, 5, 3), 5)  