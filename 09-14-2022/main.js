function domainName(url){
  let indexesWithWs = []
  let indexesWithoutWs = []
  let urlArr = url.split('')
  let resultArr = []

  for(let i=0; i<urlArr.length; i++){
    if(urlArr[i]==='/' && urlArr[i+1]==='/' && urlArr[i+2]!='w'){
      indexesWithoutWs.push(i+2)
    }
    if(indexesWithoutWs.length!=0 && urlArr[i]==='.'){
      indexesWithoutWs.push(i)
    }

    if(indexesWithoutWs.length===0 && urlArr[i]==='.'){
      indexesWithWs.push(i)
    }
  }

  if(indexesWithoutWs.length!=0){
    resultArr = urlArr.slice(indexesWithoutWs[0], indexesWithoutWs[1])
  }
  if(indexesWithoutWs.length===0){
    resultArr = urlArr.slice((indexesWithWs[0]+1), indexesWithWs[1])
  }

  return resultArr.join('')
  
}

domainName("http://google.com")
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("https://youtube.com")
