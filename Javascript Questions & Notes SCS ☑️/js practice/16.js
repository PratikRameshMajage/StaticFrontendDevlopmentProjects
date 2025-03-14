// Filter
// Important return here
const names =["Shantanu", "Pranad", "Shrusti", "Reva", "Riddi", "Aaravika", "Advisha", "Arnika", "Devanya", "Dhruti", "Ishaanvi", "Kuvya", "Manisha", "Neelisha", "Omisha", "Rohini", "Sahanya", "Shaurvika", "Vedisha", "Yuvika" ]
const newArray = names.filter(function(name){
    if(name.startsWith("A")){
        return true;
    }
})

console.log(newArray)
console.log(names)