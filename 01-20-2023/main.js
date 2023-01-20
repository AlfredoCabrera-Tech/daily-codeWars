function createAlphabet() {
  const letterArr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let alphabetObj = {};

  letterArr.forEach((letter, index) => {
    alphabetObj[letter] = index + 1;
  });

  return alphabetObj;
}

export default function wordsToMarks(string) {
  let wordArr = string.split("");
  let alphabetObj = createAlphabet();

  let pointsArr = wordArr.map((letter) => {
    return alphabetObj[letter];
  });

  return pointsArr.reduce((ac, cu) => ac + cu);
}

wordsToMarks("attitude");
