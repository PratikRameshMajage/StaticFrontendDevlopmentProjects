// Reduce Array Method: reduce method insted return a single value insted of an arrayso you can think of it like given some ingredients used to make a lemonade you reduce this list to one common vale which is the lemoade itself so you can combine  all of the these elements using logic and the final resultis one single value  
// executes a reducer  function on each elementof the array.
// returns a single output value called the accumulator
// lemon + citric aci + mint leaves + ice + sugar + water (reduce all ingredients) = lemonade (generate one item) this what the reduce function do

const numbers = [1,2,3,4,5,6,7,8,9,10]
const sum = numbers.reduce(function(acc, item){
    return acc + item;
},0)
console.log(sum)