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
    alert(inputText)
}