function even_or_odd(number) {
  let remainder = number % 2
  switch (remainder) {
    case 0:
        return "Even"
        break;
    default:
        return "Odd"
        break;
  }
}
