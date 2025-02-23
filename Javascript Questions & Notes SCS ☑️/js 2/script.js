main = document.querySelector("#main");
main.addEventListener("mousemove", function(details){
    var xval = gsap.utils.mapRange(0, window.innerWidth , 100 + rect.getBoundingClientRect().width/2, window.innerWidth - (rect.getBoundingClientRect().width/2), details.clientX ) 
    gsap.to("#rect", {
        left: xval + "px",
        ease: Power3
    })
})