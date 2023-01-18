export default function wave(str) {
  let resultArr = [];
  // Create the arrays
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      resultArr[i] = [...str.split("")];
      resultArr[i][i] = resultArr[i][i].toUpperCase();
      resultArr[i] = resultArr[i].join("");
    }
  }
  return resultArr.filter((result) => result != undefined);
}

// wave("jlkj");
