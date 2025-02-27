let addRemove = document.querySelector("#addRemove");
let image = document.querySelector("#image");
let like = document.querySelector("#like");
let body = document.querySelector("body")
let cursor = document.querySelector("#cursor");
let alphabet = document.querySelector("#alphabet")


// 1. Cursor
document.addEventListener("mousemove", function(dets){
    // gsap.to("#cursor",{
    //     left : dets.x,
    //     top : dets.y,
    // })
    // cursor.style.left = dets.x + "px"
    // cursor.style.top = dets.y + "px"
    // console.log(dets.clientX, dets.clientY)
})

// 2. Add Remove Friend
flag = 0;
addRemove.addEventListener("click", function(){
    if(flag === 0){
        addRemove.style.backgroundColor = "red"
        addRemove.textContent = "Remove Friend"
        flag = 1    
    }else{
        addRemove.style.backgroundColor = "green"
        addRemove.textContent = "Add Friend"
        flag = 0
    }
})

// 3.   Like Button
image.addEventListener("dblclick", function(){
    like.style.transform = "translate(-50%, -50%) scale(1)"
    like.style.opacity = 1
    setTimeout(function(){
        like.style.opacity = 0;
    }, 1000);
    setTimeout(function(){
        like.style.transform = "translate(-50%, -50%) scale(0)"
    },2000)
})


