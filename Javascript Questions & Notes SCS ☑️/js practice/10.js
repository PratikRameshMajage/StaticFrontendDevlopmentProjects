const extract = [
    "lemon juice",
    "seeds",
    "seeds",
    "lemon juice",
    "lemon juice",
    "seeds",
]

const onlyJuice = extract.filter(function(item){
    return item === "lemon juice"
}) 

console.log(onlyJuice)