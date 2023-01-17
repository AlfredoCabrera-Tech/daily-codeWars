export default function largestPairSum(arr) {
  arr.sort((a, b) => b - a);

  const sum = arr[0] + arr[1];
  return sum;
}
