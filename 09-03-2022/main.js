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