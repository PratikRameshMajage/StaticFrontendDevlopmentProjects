// Basic Console Usage:
// 1. Log your name and favourite hobby to the console.
console.log("Pratik","Coading...")

// 2. Perform and log the result of 45*2-10.
console.log("45*2-10 =",45*2-10);

// 3. Use console log to display current year.
const newDate = new Date();
console.log(newDate.getFullYear());
 
// 4.Create 2 variabless for first and last name concatenate and log them.
var firstanme = "Pratik"
var lastname = "Majage"
console.log(firstanme+" "+lastname)
console.log(`${firstanme} ${lastname}`)

// 5. Track the value of a variable by logging it before and after updating.
var a = 55
console.log(a)
var a = 11
console.log(a)

// 6.use console.error() to simulate an error message.
console.error("Something went Wrong.")

// 7.log the square of the number 12 to the console.
console.log(12**2)

// 8.Print the type of a variable holding the value true.
var a = true
console.log(typeof a)

// 9.Create a variable holding your age and log whether it'sgreater than 18.
var age = 22
if(age>18) console.log(true);
else console.log(false)

// 10.log the result of 100 / 0 and observe output.
console.log(100/0)

 console.log("-------------------------------------")
// Variables and Data Types: (10 Questions)
// 11. Declare a variable using let and log its value.
let aa = 11
console.log(aa)

// 12. Create a constant to store the value of PI and log it.
const PI = Math.PI
console.log(PI)

// 13. Reassign a value to a variable declared with let and log the result.
let ab = 22
console.log(ab)
ab = 33
console.log(ab)

// 14. check the type of null and log it.
console.log(typeof null)// -> Object
console.log(NaN == NaN) 
console.log(typeof NaN) // -> Number

// 15. Create a variable with a number as a string eg.,("25") and log it's type.
var ch = "25"
console.log(typeof ch)

// 16. Ues type of to check of booolean variables.
let ac = true
console.log(typeof ac)  

// 17. Create a Variables of types string, number, boolean, and its type.
let ad = "Pratik", ae = 22, af = true 
console.log(ad,ae,af)

// 19. Create a Variable with undefined and log its type.
let ag = undefined
console.log(ag)

// 20. Use const to create an array. Try reassigning the array and observe the error.
// reassign nahi karsakte❌, Update kar sakte hai✅.
const arr = [1,2,3,4,5]
// arr = [11]
console.log(arr)        //❌
console.log(arr.pop())  //✅

// reassign a value which is not possible.
const ah = 2
//ah++ // ah = ah + 1