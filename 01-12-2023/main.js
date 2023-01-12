export default function sumDigits(number) {
  number = Math.abs(number);

  let numStr = number.toString();
  let numArr = [];

  for (let i = 0; i < numStr.length; i++) {
    numArr.push(parseInt(numStr[i]));
  }
  return numArr.reduce((ac, cu) => ac + cu, 0);
}
