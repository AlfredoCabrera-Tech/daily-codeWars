function nbYear(p0, percent, aug, p) {
  // your code
  let n=0
  let people=p0

  while(people<p){
    people = Math.floor(p0+(p0*(percent/100))+aug)
    p0 = people
    n++
  }
  return n
}


function Testing(func, answer){
  console.log(func===answer)
}

nbYear(1500, 5, 100, 5000)

Testing(nbYear(1500, 5, 100, 5000), 15)
Testing(nbYear(1500000, 2.5, 10000, 2000000), 10)
Testing(nbYear(1500000, 2.5, 10000, 2000000), 11)
Testing(nbYear(1500000, 0.25, 1000, 2000000), 94)