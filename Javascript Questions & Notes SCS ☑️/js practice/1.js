// print More than 90 marks:
const marks = [
    { id: "S111", science: 99 },
    { id: "S112", science: 92 },
    { id: "S113", science: 89 },
]

const  studentsAbove90 = [];

for(let i = 0; i<marks.length; i++){
    if(marks[i].science >= 90 ){
        studentsAbove90.push(marks[i]);
    }
}

console.log(studentsAbove90);
