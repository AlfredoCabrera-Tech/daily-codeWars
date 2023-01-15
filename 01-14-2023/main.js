export default function digitize(n) {
  //code here
  let result = n
    .toString()
    .split("")
    .reverse()
    .map((el) => parseInt(el));

  return result;
}
digitize(35231);
digitize(0);
