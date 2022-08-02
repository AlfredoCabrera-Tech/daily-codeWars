function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  let arr = dna.split('')
  let rnaArr = []
  arr.forEach(element => {
    if(element === 'T'){
      rnaArr.push('U')
    } else{
      rnaArr.push(element)
    }
  })
  let rna = rnaArr.join('')
  return rna
}