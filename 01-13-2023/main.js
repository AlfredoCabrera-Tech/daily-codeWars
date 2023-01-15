export default function getSize(width, height, depth) {
  let area = 2 * width * height + 2 * width * depth + 2 * height * depth;
  let volume = width * height * depth;
  return [area, volume];
}
