var addRemove = document.querySelector("#addRemove");
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