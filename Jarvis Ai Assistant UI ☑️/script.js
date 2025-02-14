micLogo = document.querySelector("#mic-logo");
content = document.querySelector("#content");
request = document.querySelector("#request")

request.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        micClick()
        wishMe()
    }
})

micLogo.addEventListener("click",function(){
    micClick()
    wishMe()
})

flag = 0
function micClick(){
    if(flag === 0){
        micLogo.style.color = "cyan"
        flag = 1
    }
    else{
        micLogo.style.color = "lightgray"
        flag = 0
    }
}

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode")
}

document.querySelector("#dark-mode").addEventListener("click",function(){
    // alert("Dark Mode Enabled..")
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
})

function wishMe() {
    const now = new Date();
    const hours = now.getHours();
    let message;
    let greeting = "hey Pratik. How can i help you Today?"

    if (hours >= 5 && hours < 12) {
        message = "Good Morning!.";
    } else if (hours >= 12 && hours < 17) {
        message = "Good Afternoon!";
    } else if (hours >= 17 && hours < 22) {
        message = "Good Evening!.";
    } else {
        message = "Good Night!.";
    }
    var string = (message +" "+ hours +" "+ now )
    content.textContent = (string)

    const speech = new SpeechSynthesisUtterance(message + greeting);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
}
