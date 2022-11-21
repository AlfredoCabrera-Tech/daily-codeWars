const basicTest = require('../Tests/basicTest')

function longestConsec(strarr, k) {
  let n = strarr.length
  if(n===0 || k>n || k<=0){
    return ''
  }

  let resultArr = []
  for(let i=0; i<strarr.length;i++){
    let word = ''
    for(let j=i; j<i+k; j++){
      if(!strarr[j]){
        break
      }
      word += strarr[j]
    }
    resultArr.push(word)

  }

  return resultArr.sort((a,b) => b.length-a.length)[0]
}

basicTest(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3), "ixoyx3452zzzzzzzzzzzz")
basicTest(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")
basicTest(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1), "oocccffuucccjjjkkkjyyyeehh")
basicTest(longestConsec([], 3), "")
basicTest(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2), "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
basicTest(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2), "wlwsasphmxxowiaxujylentrklctozmymu")
basicTest(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "")
basicTest(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15), "")
basicTest(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0), "")
