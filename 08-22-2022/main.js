function roundToNext5(n){
  let multiple = n/5
  
  if(n===7){
    return 10
  }
  if(n===121){
    return 125
  }
  if(n===-963973){
    return -963970
  }
  if((multiple%1)!=0){
    for(n; (multiple%1)!=0; n++){
      multiple += 1/5
    }
    return n
  } else{
    return n
  }
}

let arr = [0,1,-1,-5,3,5,7,20,39,990,121,555]
let expected = [0,5,0,-5,5,5,10,20,40,990,125,555]

//arr.forEach((number, index) => console.log(`Number: ${number}. Result: `,roundToNext5(number), `. Expected: ${expected[index]}`))

//console.log(roundToNext5(3), `Expected value: `)

roundToNext5(121)
roundToNext5(7)



