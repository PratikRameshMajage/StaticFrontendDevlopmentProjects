const marks = [
    { id: "S101", science:90 },
    { id: "S102", science:95 },
    { id: "S103", science:85 },
    { id: "S104", science:98 },
    { id: "S105", science:75 },
]

function  loopArray(callback){
    for(let i = 0; i < marks.length; i++){
        callback(marks[i])
    }
}

const maxMarksStudent = []

loopArray(
    function(student){
        if(student.science >= 90){
            maxMarksStudent.push(student)
        }
    }
)

console.log(maxMarksStudent)



