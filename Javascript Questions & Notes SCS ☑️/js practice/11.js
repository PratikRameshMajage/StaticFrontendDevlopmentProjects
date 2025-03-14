const marks = [
    { id:"S101", science: 89 },
    { id:"S102", science: 79 },
    { id:"S103", science: 96 },
    { id:"S104", science: 88 },
    { id:"S105", science: 95 },
]

const maxMarks =  marks.filter(function(object){
    if(object.science > 80){
        console.log(object)
    }
})