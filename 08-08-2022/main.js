function findNeedle(haystack) {
  // your code here
  let result = []
  haystack.forEach((value, index) => {
    if(value === "needle"){
      result.push(`found the needle at position ${index}`)
    }
  })
  return (result.length > 0) ? result[0] : `Your function didn't return anything`
}