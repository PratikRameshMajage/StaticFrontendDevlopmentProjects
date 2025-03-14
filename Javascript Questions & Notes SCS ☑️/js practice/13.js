const numbers = [5,4,3,2,1];
const max = numbers.reduce(function(acc, item){
    return acc > item ? acc : item
})
console.log(max)