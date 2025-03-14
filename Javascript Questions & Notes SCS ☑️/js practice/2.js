
// Print maximum marks scrore in science:

const marks = [
    { id:"S101", science:90 },
    { id:"S102", science:92 },
    { id:"S103", science:89 },
]

let maxMarks = 0;
const maxMarkStudent = []

// Print Maximum marks. 

for(let i = 0; i < marks.length; i++){
    if(marks[i].science > maxMarks){
        maxMarks = marks[i].science
    }
}

console.log("miximum marks in science is: ", maxMarks)

// Print Max Mark Object.

for(let i = 0; i < marks.length; i++){
    if(maxMarks === marks[i].science ){
        maxMarkStudent.push(marks[i])
    }
}

console.log(maxMarkStudent)