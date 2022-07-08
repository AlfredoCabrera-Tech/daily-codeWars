function bmi(weight, height) {
  let value = (weight/(height*height))
  if(value <= 18.5){
    return "Underweight"
  } if(value <= 25.0){
    return "Normal"
  } if(value <= 30.0){
    return "Overweight"
  } if(value > 30){
    return "Obese"
  }
}
