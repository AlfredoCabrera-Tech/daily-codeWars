const arrayTest = require('../Tests/arrayTest')


function openOrSenior(data){
  let result = []
  data.forEach(profile => {
    if(profile[0]>=55 && profile[1]>7){
      result.push('Senior')
    } else{
      result.push('Open')
    }
  })

  return result
}

arrayTest(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]),["Open", "Open", "Senior", "Open", "Open", "Senior"])
arrayTest(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
arrayTest(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
arrayTest(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])