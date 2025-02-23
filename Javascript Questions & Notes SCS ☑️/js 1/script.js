var rect =document.querySelector("#rect")
rect.addEventListener("mousemove", function(details){
    rectLocation = rect.getBoundingClientRect()
    insideRectVaal = (Math.floor(details.clientX - rectLocation.left))
    if(insideRectVaal < rectLocation.width/2){
        var redColor = gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, insideRectVaal)
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4,
        })
    }else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, insideRectVaal)
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4,
        })
    }
})
rect.addEventListener("mouseleave", function(){
    gsap.to(rect, {
        backgroundColor: "white"
    })
})