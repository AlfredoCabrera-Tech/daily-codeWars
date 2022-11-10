const basicTest = require('../basicTest')

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0
  let dogYears = 0
  
  if(humanYears===1){
    catYears = 15
    dogYears = 15
  } if(humanYears===2){
    catYears = 24
    dogYears = 24
  } if(humanYears>=3){
    catYears = 24
    dogYears = 24
    for(let i=2; i<humanYears; i++){
      catYears += 4
      dogYears += 5
    }
  }
  
  return [humanYears,catYears,dogYears];
}

//basicTest(humanYearsCatYearsDogYears(1), [1,15,15]);
//basicTest(humanYearsCatYearsDogYears(2), [2,24,24]);
basicTest(humanYearsCatYearsDogYears(10), [10,56,64]);