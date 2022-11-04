const basicTest = require('../basicTest')

function twoSort(s) {
  let sSorted = s.sort()
  let first = sSorted[0]

  return first.split('').join('***')

}

basicTest(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
basicTest(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');