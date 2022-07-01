function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let presentSheeps = arrayOfSheep.filter(sheep => sheep === true && sheep != null && sheep != undefined )
  return presentSheeps.length
}