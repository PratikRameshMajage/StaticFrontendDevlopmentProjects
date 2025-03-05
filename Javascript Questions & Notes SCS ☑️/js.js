// Dom = Document Object Model. DOM Manuplation.

// 3 Pillers:
    // Selection
    // Change HTML & CSS
    // addEventListener

// 1. Accessing Elements: Select and Save:
var h1 = document.getElementById("#h1");
var h1 = document.getElementsByClassName(".h1");
var h1 = document.getElementsByTagName("h1");
var body = document.querySelector("body");
var h1 = document.querySelectorAll("h1");

// 2. Modifying Change: innerHTML, textContent
h1.innerHTML = <span>HI</span>;
h1.innerHTML += <span>HI</span>;
h1.textContent = "Hi";
h1.textContent += "Hi";

// 3. Manuplaiting Styles and Classes: 
// USe camelcase for properties, and "" for values.
// Styles: style
h1.style.color = "red";
// Classes: classList
h1.classList.add("makeItRed");
h1.classList.remove("makeItRed");


// 4. Creating and Deleting Element:
// createElement()
// appendElement()
// removeElement()

var h1 = document.createElement("h1");
h1.textContent = "hey!"
h1.classList.add("makeItRed")
document.querySelector("body").appendChild(h1)
document.querySelector("body").removeChild(h1)


// 5. Event Handling
    // addEventListener()

h1.addEventListener("click", function(){
    h1.textContent = "Loading..."
    h1.style.color = "royalblue"
})
// dblclick
// mouseover
// mousedown
// mouseup
// mouseenter
// mouseleave
// mousemove
// keydown
// keyup
// keypress
// focus
// blur
// submit
// change
// input
// resize
// scroll
// load
// unload
// error
// contextmenu

// 6. Event Object: Details (Prototypes)
body.addEventListener("click", function(dets){
    cursor.style.left = dets.clientX;
    cursor.style.top = dets.clientY;
})