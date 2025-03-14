// Spred & Reast Operators:

const names = ["Jhon", "Jane", "Doe", "Smith"];
// const copyNames = names
const copyNames = [...names]

names.pop()
console.log(names)
console.log(copyNames)

const user = {
    name:"Pratik",
    age:22,
    location:"India",
}

// const copyUser = user;
const copyUser = {...user};


user.name = "Krish"
console.log(user)
console.log(copyUser)


// Rest Operator:
function abcd(...values){
    console.log(values)
}
abcd(1,2,3,4,5,6,7,8,9)