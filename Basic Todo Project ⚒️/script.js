// 1. Step : Click on Add Task Button.
// 2. Step :  Add Task
addTaskBtn = document.querySelector("#addTaskBtn")
inputTask = document.querySelector("#inputTask")

// Click Button:
addTaskBtn.addEventListener("click", function(){
    // alert("Hello Guys, This is Prank for you..😜")
    addTask()
})

// Enter Button:
inputTask.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        // alert("Hello Guys, This is Prank for you..😜")
        addTask()
    }
})

function addTask(){
    var inputText = inputTask.value.trim()
    if(inputText === "") return
    // else alert(inputText)

    // CREATE
    const li = document.createElement("li")
    li.innerHTML = `<h4>${inputText}</h4> 
                <div class="delete">❌</div>`

    // COMPLETE
    const h4 = li.querySelector("h4")
    li.addEventListener("click", function(){
        h4.classList.toggle("complete")
    })  

    // DELETE
    li.querySelector(".delete").addEventListener("click", function(event){
        event.stopPropagation()
        li.remove()
    })           

    // ADD
    taskList.append(li)
    inputText.value = ""

}