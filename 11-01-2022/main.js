const basicTest = require('../basicTest')

function high(x){
  const strArr = x.split(' ')
  let scores = strArr.map(word => {
    let wordValues = []
    word.split('').forEach(letter => {
      let letterValue = 0
      switch(letter){
        case 'a':
          letterValue = letterValue + 1
          wordValues.push(letterValue)
          break;
        case 'b':
          letterValue = letterValue + 2
          wordValues.push(letterValue)
          break;
        case 'c':
          letterValue = letterValue + 3
          wordValues.push(letterValue)
          break;
        case 'd':
          letterValue = letterValue + 4
          wordValues.push(letterValue)
          break;
        case 'e':
          letterValue = letterValue + 5
          wordValues.push(letterValue)
          break;
        case 'f':
          letterValue = letterValue + 6
          wordValues.push(letterValue)
          break;
        case 'g':
          letterValue = letterValue + 7
          wordValues.push(letterValue)
          break;
        case 'h':
          letterValue = letterValue + 8
          wordValues.push(letterValue)
          break;
        case 'i':
          letterValue = letterValue + 9
          wordValues.push(letterValue)
          break;
        case 'j':
          letterValue = letterValue + 10
          wordValues.push(letterValue)
          break;
        case 'k':
          letterValue = letterValue + 11
          wordValues.push(letterValue)
          break;
        case 'l':
          letterValue = letterValue + 12
          wordValues.push(letterValue)
          break;
        case 'm':
          letterValue = letterValue + 13
          wordValues.push(letterValue)
          break;
        case 'n':
          letterValue = letterValue + 14
          wordValues.push(letterValue)
          break;
        case 'o':
          letterValue = letterValue + 15
          wordValues.push(letterValue)
          break;
        case 'p':
          letterValue = letterValue + 16
          wordValues.push(letterValue)
          break;
        case 'q':
          letterValue = letterValue + 17
          wordValues.push(letterValue)
          break;
        case 'r':
          letterValue = letterValue + 18
          wordValues.push(letterValue)
          break;
        case 's':
          letterValue = letterValue + 19
          wordValues.push(letterValue)
          break;
        case 't':
          letterValue = letterValue + 20
          wordValues.push(letterValue)
          break;
        case 'u':
          letterValue = letterValue + 21
          wordValues.push(letterValue)
          break;
        case 'v':
          letterValue = letterValue + 22
          wordValues.push(letterValue)
          break;
        case 'w':
          letterValue = letterValue + 23
          wordValues.push(letterValue)
          break;
        case 'x':
          letterValue = letterValue + 24
          wordValues.push(letterValue)
          break;
        case 'y':
          letterValue = letterValue + 25
          wordValues.push(letterValue)
          break;
        case 'z':
          letterValue = letterValue + 26
          wordValues.push(letterValue)
          break;
        default:
          break;
      }
      return wordValues
    })
    
    let wordValue = wordValues.reduce((ac,cu) => ac+cu)
    return wordValue
  })
  let highestWord = strArr[scores.indexOf(Math.max(...scores))]
  return highestWord

}

//high('hello my old friend')

basicTest(high('man i need a taxi up to ubud'), 'taxi');
basicTest(high('what time are we climbing up the volcano'), 'volcano'); 
basicTest(high('take me to semynak'), 'semynak');  
basicTest(high('aa b'), 'aa');
basicTest(high('b aa'), 'b');
basicTest(high('bb d'), 'bb');
basicTest(high('d bb'), 'd');
basicTest(high('aaa b'), 'aaa');