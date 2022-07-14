// take a number form 100% to 0% with 100% being an A+
// 100-90 A
//  89-80 B
//  79-70 C

function assignGrade (gradeNumber) {
    if (gradeNumber >= 90)
    {
        return "A"
    }
    if (gradeNumber > 80 && gradeNumber < 89){
        return "B"
    }
    if (gradeNumber > 70){
        return "C"
    }
}

console.log(assignGrade(86))

console.log(assignGrade)