// map array method: is use to map an original array to a completely new array.
Array.prototype.map = function(callback){
    const result = [];
    for(let i = 0; i < this.length ; i++ ){
        result.push(callback( this[i], i, this))
    }
    return result;
}


// Use of Map Array Function.
// Returns new array it does not alter the existing array at all.
const number = [1,2,3,4,5]

const doubled = number.map(function(item){
    return 2 * item;
})

console.log(doubled)