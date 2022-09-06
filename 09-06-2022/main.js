function arrayDiff(a, b) {
  return a.filter(element => (element||element===0)&&!b.includes(element))
}
