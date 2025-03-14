// Different ways to iterate through an array
// 1. forEach
// here you don't have to create your own loop array function 
// provides you clean and straightforwod way to iterate through the element's of an array 
// it accept's an callback function that it executes on each element of an array 

Array.prototype.forEach = function(callback){
    // this refers to Array.
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this);
    }
};

const colors = ["red", "green", "blue"];

colors.forEach(function(color, index){
    console.log(`color at index ${index} is: ${color}`)
})