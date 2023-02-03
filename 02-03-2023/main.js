export default function factorial(n) {
  if (n === 0 || n === 1 || n < 0) {
    return 1;
  }
  const resultArr = [];
  for (let i = n; i > 0; i--) {
    resultArr.push(i);
  }
  return resultArr.reduce((ac, cu) => ac * cu);
}

// factorial(0);
// factorial(1);
// factorial(4);
factorial(7);
factorial(17);
