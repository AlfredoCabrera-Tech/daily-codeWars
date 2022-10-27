const basicTest = require('../basicTest')

function peopleWithAgeDrink(old) {
  if(old<14){
    return "drink toddy"
  }
  if(old<18){
    return "drink coke"
  }
  if(old<21){
    return "drink beer"
  } 
  else{
    return "drink whisky"
  }
};

basicTest(peopleWithAgeDrink(22), 'drink whisky')