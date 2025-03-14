// ForEach.
// continue - break not use in forEach
const names = ["Pratik", "Rohan", "Shantanu", "Pranad", "Shreyash"]
names.forEach(function(name){
    if(name.startsWith("P")){
        console.log(name)
    }
})