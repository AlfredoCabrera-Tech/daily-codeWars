export default function isSortedAndHow(array) {
  let ascending = 0;
  let descending = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i + 1]) {
      ascending++;
    }
    if (array[i] > array[i + 1]) {
      descending++;
    }
  }

  if (ascending > 0 && descending > 0) {
    return 'no';
  }
  if (ascending > 0 && descending === 0) {
    return 'yes, ascending';
  }
  if (ascending === 0 && descending > 0) {
    return 'yes, descending';
  }
}
