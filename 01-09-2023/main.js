export default function isTriangle(a, b, c) {
  const lengths = [a, b, c];
  const sums = [a + b, a + c, b + c];

  const resultArr = lengths.map((side) => sums.every((item) => item > side));

  return resultArr.every((item) => item === true);
}

isTriangle(1, 2, 2);
isTriangle(7, 2, 2);
