// Sum Numbers
function sum (numbers) {
  "use strict";
  if (numbers.length === 0){
    return 0
  } else{
    let numSum = numbers.reduce((ac, cu) => ac+cu, 0)
    return numSum
  }
};