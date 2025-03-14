
const marks = [
    { id:"S101", science: 99 },
    { id:"S102", science: 92 },
    { id:"S103", science: 100 },
    { id:"S104", science: 75 },
    { id:"S105", science: 92 },
]

let maxMarks = 0;

// ForEach is higher order function
// here this refers to current array.
marks.forEach(function(object){
    if(object.science > maxMarks){
        maxMarks = object.science
    }
})

console.log(maxMarks)