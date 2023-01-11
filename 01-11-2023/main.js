export default function sortArray(array) {
  if (array.length === 0) {
    return [];
  }

  const oddsArr = array.filter((number) => number % 2 != 0).sort();
  let resultArr = [];
  let evensPushed = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      resultArr.push(array[i]);
      evensPushed++;
    }
    if (array[i] % 2 != 0) {
      resultArr.push(oddsArr[i - evensPushed]);
    }
  }

  return resultArr;
}
