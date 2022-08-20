function getGrade (s1, s2, s3) {
  let gradesAverage = (s1+s2+s3)/3

  if(gradesAverage<=100 && gradesAverage>=90){
    return 'A'
  }
  if(gradesAverage<90 && gradesAverage>=80){
    return 'B'
  }
  if(gradesAverage<80 && gradesAverage>=70){
    return 'C'
  }
  if(gradesAverage<70 && gradesAverage>=60){
    return 'D'
  }
  if(gradesAverage<60 && gradesAverage>=0){
    return 'F'
  }
  if(gradesAverage<0 || !gradesAverage){
    return 'Check your grades'
  }
}