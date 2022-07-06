function rentalCarCost(d) {
  let counter = d*40 
  
  if(d >= 3 && d < 7){
    counter = counter - 20
  }
  if(d >= 7){
    counter = counter - 50
  }
  return counter
}

rentalCarCost(1)
rentalCarCost(2)
rentalCarCost(5)
rentalCarCost(35)
rentalCarCost(96)
rentalCarCost(19)