export default function rowWeights(array) {
  const team1 = array.filter((el, i) => i % 2 === 0);
  const team2 = array.filter((el, i) => i % 2 != 0);

  const weight1 = team1.reduce((ac, cu) => ac + cu, 0);
  const weight2 = team2.reduce((ac, cu) => ac + cu, 0);

  return [weight1, weight2];
}
