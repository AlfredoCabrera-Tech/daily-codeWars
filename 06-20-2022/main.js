var summation = function (num) {
    let counter = 0
    for(i = 1; i < (num + 1); i++){
        counter += i
        console.log(`Now i is ${i} and counter is ${counter}`)
    }
    return counter
  }
