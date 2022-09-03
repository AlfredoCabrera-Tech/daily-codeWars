function points(games) {
  let points = 0

  games.map((game,index) => {
    if(game[0]>game[2]){
      points += 3
    }
    if(game[0]===game[2]){
      points++
    }

    return points
  })
  return points
}

points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) // expected: 30
points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) // expected: 10
points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) // expected: 0
points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) // expected: 15
points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) // expected: 12
