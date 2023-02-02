export default function mxdiflg(a1, a2) {
  // your code
  // return [...a1, ...a2].sort((a, b) => b.length - a.length)[0].length;
  let results = [];
  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      results.push(Math.abs(a1[i].length - a2[j].length));
    }
  }
  results.sort((b, a) => a - b);
  return results[0];
}

const s1 = [
  "hoqq",
  "bbllkw",
  "oox",
  "ejjuyyy",
  "plmiis",
  "xxxzgpsssa",
  "xxwwkktt",
  "znnnnfqknaz",
  "qqquuhii",
  "dvvvwz",
];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
mxdiflg(s1, s2);
