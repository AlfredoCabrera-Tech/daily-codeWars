function removeSmallest(numbers) {
  if (numbers === []){
    return []
  } else {
    return numbers.filter((n, i) => i != numbers.indexOf(Math.min(...numbers)))
  }
}


//Comments:
/* Array.filter has two default arguments: n for each element AND i for the index of each element */