export default function predictAge(
  age1,
  age2,
  age3,
  age4,
  age5,
  age6,
  age7,
  age8
) {
  let numArr = [age1, age2, age3, age4, age5, age6, age7, age8]
    .map((num) => Math.pow(num, 2))
    .reduce((ac, cu) => ac + cu);

  return Math.floor(Math.sqrt(numArr) / 2);
}
