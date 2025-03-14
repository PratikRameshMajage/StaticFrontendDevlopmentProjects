// Filter:exactly how it sounds like, used to filter an array of elements.
// so have a n array you can filter these elements insede of this array based on certain condetion and return only those elements that passthis filter.
// returns a new array with all elements that satisfy a given condition from the given array
// lemon Juice + Filter = (Seeds) + (lemon Juice)

// Array.prototype.filter = function(callback){
//     const result = []
//     for(let i = 0; i < this.length; i++ ){
//         if(this[i], i, this){
//             result.push(this[i])
//         }
//     }
//     return result;
// }


const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
})
console.log(evenNumbers)