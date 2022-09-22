function DNAStrand(dna){
  let dnaArr = dna.split('')
  
  let resultArr = dnaArr.map(letter => {
    switch(letter){
        case 'A':
          return 'T'
        case 'T':
          return 'A'
        case 'C':
          return 'G'
        case 'G':
          return 'C'
        default:
          break;
    }
  })
  
  return resultArr.join('')
}