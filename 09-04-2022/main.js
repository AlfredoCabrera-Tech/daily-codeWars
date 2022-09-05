function titleCase(title, minorWords='') {
  let titleArr = title.toLowerCase().split(' ')
  let minorArr = minorWords.toLowerCase().split(' ')
  
  
  if(title!=''){
    titleArr[0] = titleArr[0][0].toUpperCase() + titleArr[0].slice(1)
    let titleArrCap = titleArr.map(word => {
      
      if(minorWords!=''){
        for(let i=0; i<minorArr.length;i++) {
          
          if(!minorArr.includes(word)){
            word = word[0].toUpperCase() + word.slice(1)
            return word
          } if(minorArr.includes(word)){
            return word
          }

          return word
        }

      } else{
        word = word[0].toUpperCase() + word.slice(1)
        return word
      }
      
    })
    return titleArrCap.join(' ')
  } else{
    return ''
  }
}
