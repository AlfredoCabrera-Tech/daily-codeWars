const basicTest = require("../Tests/basicTest");

function findUniq(arr) {
  let contrast = arr[0];
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != contrast) {
      resultArr.push(arr[i]);
    }
  }
  return resultArr.length > 1 ? contrast : resultArr[0];
}

basicTest(findUniq([1, 0, 0]), 1);
basicTest(findUniq([0, 1, 0]), 1);
basicTest(findUniq([0, 0, 1]), 1);
basicTest(findUniq([1, 1, 1, 2, 1, 1]), 2);
basicTest(findUniq([1, 1, 2, 1, 1]), 2);
basicTest(findUniq([3, 10, 3, 3, 3]), 10);
