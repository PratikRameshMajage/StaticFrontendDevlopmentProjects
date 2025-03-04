var cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";;
})