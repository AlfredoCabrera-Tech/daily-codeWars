const basicTest = require('../Tests/basicTest');

function duplicateEncode(word) {
  const wordArr = word.toLowerCase().split('');
  const occurrences = {};
  let resultArr = [];

  wordArr.forEach((letter) => {
    if (!occurrences[letter]) {
      occurrences[letter] = 1;
    } else {
      occurrences[letter]++;
    }
    // return occurrences
  });

  wordArr.forEach((letter) => {
    if (occurrences[letter] === 1) {
      resultArr.push('(');
    } else if (occurrences[letter] > 1) {
      resultArr.push(')');
    }
    // return resultArr
  });

  return resultArr.join('');
}

basicTest(duplicateEncode('din'), '(((');
basicTest(duplicateEncode('recede'), '()()()');
basicTest(duplicateEncode('Success'), ')())())', 'should ignore case');
basicTest(duplicateEncode('(( @'), '))((');
