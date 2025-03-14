const marks = [
    { id: "S0101", science: 89 },
    { id: "S0101", science: 90 },
    { id: "S0101", science: 95 },
    { id: "S0101", science: 69 },
    { id: "S0101", science: 98 },
]
// console.log(marks)

// LoopArray Function is Higher order Function beacouse it accepts a function and returns a function.
function loopArray(callback){
    for(let i = 0; i< marks.length; i++ ){
        // console.log(marks[i])
        callback(marks[i])
    }
}

let maxMarks = 0

function findMaxMark(object){
    if(object.science > maxMarks ){
        maxMarks = object.science
    }
}

loopArray(findMaxMark)

console.log("Maximum marks Student is: " , maxMarks , "Consider as a Number")
console.log("Maximum marks Student is: " + maxMarks + " Consider as a String")
