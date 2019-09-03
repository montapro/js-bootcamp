// studendt score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function(studentScore = 0, totalPossibleScore = 100) {
  const percent = (studentScore * 100) / totalPossibleScore
  let letterGrade = ''

  if (percent >= 90) {
    letterGrade = 'A'
  } else if (percent >= 80) {
    letterGrade = 'B'
  } else if (percent >= 70) {
    letterGrade = 'C'
  } else if (percent >= 60) {
    letterGrade = 'D'
  } else {
    letterGrade = 'F'
  }

  return `${studentScore}/${totalPossibleScore} -> You got a ${letterGrade} (${percent}%)!`
}

const result = gradeCalc(30, 50)
console.log(result)