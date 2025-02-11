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
console.log("-------------------------------------")

// Loops:
// 21. Write a loop to print numbers from 1 to 50.
for(var i=1; i<=50; i++){
    console.log(i)
}

// 22. Use a while loop to sum the numbers from 1 to 10.
var i = 1
sum = 0
while(i<=10){
    sum += i
    i++
}
console.log(sum)

// 23. Create a for...of loop to log each charecters of the string "Javascript".
let str = "Javascript"
for(charecter of str ){
    console.log(charecter)
}

// 24. Write a for loop that skips even numbers between 1 to 20.
// for(var i=1;i<=20;i++){
//     if(!(i%2===0)){
//         console.log(i)
//     }
// }
for(var i=1;i<=20;i++){
    if(i%2 !== 0){
        console.log(i)
    }
}

// 25. Use a do..while loop to log numbers from 5 to 1.
do{
    console.log("Hi")
}while(12<1)

var i = 5
do{
    console.log(i)
    i--
}while(i>=1)

// 26. Create a for loop that calculates the factorial of 5.
var fact = 1
for(var i=1; i<=5;i++){
    fact*=i
}
console.log(fact)


// 27. Create a for loop that to print 3*3 grid  of numbers.
num = 1
for(var i = 1;i<=3;i++){
    var string = "";
    for(var j=1;j<=3;j++){
        // string += num + " "
        string += `${num}` + " "
        num++
    }
    console.log(string)  
}

// 28. use a for loop to reverse an array [1,2,3,4].
var arr1 = [1,2,3,4,5]
for(var i = arr1.length - 1; i>=0 ; i--){
    console.log(arr1[i])
}
// Ye nahi karna hai beacouse arr1 is still not printing in Reverse Order.
console.log(arr1)
// Right way to execute.
for(var i=0; i<arr1.length/2; i++){
    var temp = arr1[i]
    arr1[i] = arr1[arr1.length - 1 -i]
    arr1[arr1.length -i -1] = temp
}
console.log(arr1)

// 29. write a loop that logs numbers 1 to 100 divisible by 5.
var num = 1
while(num<=100){
    if(num%5===0) console.log(num)
    num++
}

// 30. Use for...in loop to iterate over an Object and log it's keys.
obj = {
    name:"a",
    email:"a@example.com",
    age:26
}
for(let key in obj){
    console.log(key)
}
console.log("-------------------------------------")


// Array:
// 31. Create an array of your top 5  favourite movies and log it.
var arr2 = ["Hero", "Zero", "G-one", "R-one"]
arr2.forEach(function(value){
    console.log(value)
})

// 32. Find and log the second element of an array.
var arr3 = [1,2,3,4,5]
console.log(arr3[1])
console.log(arr3)

// 33. Add new Elements to the start of an array using .unshift().
arr3.unshift(0)
arr3.unshift(-1)
console.log(arr3)

// 34. Remove the last element of an  array and log the updated array.
arr3.pop()
console.log(arr3)

// 35. Use .slice() to extract the first three elements of an array.
console.log(arr3.slice(1,3))

// 36. Find index of specific elements in an array using .indexOf().
console.log(arr3.indexOf(3))

// 37. Check if a value exists in an array using .includes().
console.log(arr3.includes(5))

// 38. Combines two arrays [1,2] and [3,4] using .concat().
var arr4 = [1,2,3,4]
var arr5 = [5,6,7,8]
console.log(arr4.concat(arr5))

// 39. Sort an array of numbers [5,2,9,1] in acending order.
var aa1 = [11,24,36,4,5]
// Bubble Sort
for(var j = 0; j < aa1.length - 1; j++){
    for(var i = 0; i < aa1.length - j - 1; i++){
        if(aa1[i] > aa1[i+1]){
            var temp = aa1[i]
            aa1[i] = aa1[i+1]
            aa1[i+1] = temp  
        }
    }
}
console.log(aa1)

// 40. Write a program that creates a copy of an array without mutating the original.
// Technique:1 - Spread Operator.
var a1 = [1,2,3,4,5]
var a2 = [...a1]
console.log(a2)

// Mutation means this:
a1 = a2

// Technique:2
var a3 = []
a1.forEach(function(value){
    a3.push(value)
})
console.log("arr2 is:",a2)



// Function
// 41. Write a function to cheack if a number is even or odd.
function evenOdd(value){
    if(value%2 === 0){
        console.log(value+" is even");
    } 
    else{
        console.log("Odd")
    } 
}
evenOdd(23)

// 42. Create a function to calculate the area of a circle with a given radius.
function area(r){
    return Math.round(Math.PI * r * r);
}
console.log(area(4))

// 43. Write a function that accepts an array and returns the sum of it's element.


function sumofarray(arr){
    var sum = 0
    arr.forEach(function(e){
        sum = sum + e
    })
    return sum;
}
console.log(sumofarray([1,2,3,4,5,6,7,8,9,10]))

// 44. Create a function that checks if a string starts with a specific charecters.
function checker(str,char){
    return str.toLowerCase().startsWith(char.toLowerCase());
}
console.log(checker("Pratik",'p'))

// 45. Write a function to find maximum of two numbers. 
 function max(a,b){
    if(a>b){
        return a
    }else if(a<b){
        return b
    }else return "equals"
 }
console.log(max(10,2))

// 46. Create a function that takes a number and returns it's factorial.
function getfact(num){
    let fact = 1
    for(var i = 1; i<=num; i++){
        fact *= i
    }
    return fact;
}
console.log(getfact(5))


// 47. Wrte a function that accepts a string and returns it's reverse.
function abcd(num){
    return num.split("").reverse().join('')
}
console.log(abcd("Pratik"))

// 48. Create a function to find a largest numbers in array.
function abcd(arr){
    var max = 0
    for(var i = 1; i<=arr.length; i++){
        if(arr[i]>arr[max]){
            max = i 
        }
    }
    return arr[max];
}
console.log(abcd([1,22,13,44,15,6]))


// 49. Write a function that converts string to kebab-case (eg., "Hello World" -> "Hello-World").
function kabab(str){
    // return str.split(' ').join('-')
    return str.replaceAll(" ","-")
}
console.log(kabab("hey kaise ho"))

// 50. Create a function that logs "Hello, World" every time it is called.
function printing(){
    console.log("Hello World");
}
printing()
printing()
printing()