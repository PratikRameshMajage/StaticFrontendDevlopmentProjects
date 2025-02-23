var container = document.querySelector("#container")

const throttleFunction = (func, delay)=>{
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            return func(...args);
        }
    }
}

container.addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div")
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px"
    div.style.top = dets.clientY + "px"
    
    var img  = document.createElement("img")
    img.setAttribute("src", "1.jpeg")

    div.appendChild(img)
    document.body.appendChild(div)

    gsap.to(img, {
        y:"0",
        ease: Power4,
        duretion: .5, 
    })
    gsap.to(img, {
        y:"100%",
        delay: .7  , 
        ease: Power4,
        // duretion: .4, 
    })

    setTimeout(function(){
        div.remove();
    },1000)
},150))
