// Questions:
// 1. Merging of two arrays of data fetched from separate API's into a single list.
const fname = ["Pratik", "Shantanu", "Pranad"]
const lname = ["Majage", "Kajle", "More"]
const fullNanme = [...fname, ...lname]
console.log(fullNanme)


// 2. Filtering an array of objects to display items based on a  search query (e.g, filtering product's by type).

const products = [
    {name: "Laptop", type: "Electronics"},
    {name: "Phone", type: "Electronics"},
    {name: "Tablet", type: "Electronics"},
    {name: "Monitor", type: "Electronics"},
    {name: "Shirt", type: "Clothing"},
    {name: "Pants", type: "Clothing"},
    {name: "Laptop", type: "Footware"},
]

let newArr = products.filter(function(products){
    return products.type === "Electronics"
})
console.log(newArr)

// 3. Mapping over an array of user data to create a list of user cards.

const users = [
    { name:"Pratik", age:22 },
    { name:"Rohan", age:21 },
    { name:"Siddhi", age:23 },
]
// console.log(users)
const nArr = users.map(function(user){
    return `<div><h3>${user.name}</h3><h5>${user.age}</h5></div>`
})
console.log(nArr)

// 4. Grouping an array of object by a specific property (e.g.,  grouping user by role) 
const users2 = [
    {name: "Partik", age: 22, role: "admin"},
    {name: "Prachi", age: 21, role: "user"},
    {name: "Rehan", age: 24, role: "admin"},
]

let obj = {}

users2.forEach(function(user){
    if(obj[user.role]){
        obj[user.role].push(user);
    }else{
        obj[user.role] = []
        obj[user.role].push(user);
    }
})
console.log(obj)

// 5. removing or updating a specific object  in an array of data based on unique Id.

const users3 = [
    { id:1, name: "Alice", age:21 },
    { id:2, name: "Bob", age:35 },
    { id:3, name: "Charlie", age:42 },
    { id:4, name: "Diana", age:31 },
    { id:5, name: "Ethan", age:29 },
] 

const nArr2 = users3.filter(function(user){
    return user.id !== 2;
})

console.log(nArr2)