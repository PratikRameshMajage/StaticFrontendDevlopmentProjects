var main = document.querySelector("#main");

function validation(){
    let error = document.getElementById("error")

    let yourName = document.getElementById("yourName").value
    let yourNamePattern = /^[a-zA-Z]{3,20}$/

    let userName = document.getElementById("userName").value
    let userNamePattern = /^[a-zA-Z0-9]{3,20}$/

    let mail = document.getElementById("mail").value
    let mailPattern = /^[a-zA-Z0-9_#$%]+\@[a-zA-Z0-9]+\.([a-z]{2,4})$/

    let pass = document.getElementById("pass").value
    let passPattern = /^[a-zA-Z0-9]{6,10}$/

    let conPass = document.getElementById("conPass").value


    if(yourName == ""){
        error.textContent = "Enter Your Name..!"
        return false;
    }
    else if(!yourName.match(yourNamePattern)){
        error.textContent = "Enter Valid Name..!"
        return false;
    }
    else if(userName == ""){
        error.textContent = "Enter User Name..!"
        return false;
    }
    else if(!userName.match(userNamePattern)){
        error.textContent = "Enter Valid User Name..!"
        return false;
    }
    else if(mail == ""){
        error.textContent = "Enter Mail..!"
        return false;
    }
    else if(!mail.match(mailPattern)){
        error.textContent = "Enter Valid Mail..!"
        return false;
    }
    else if(pass == ""){
        error.textContent = "Enter Password..!"
        return false;
    }
    else if(!pass.match(passPattern)){
        error.textContent = "Enter Valid Password..!"
        return false;
    }
    else if(conPass !== pass){
        error.textContent = "Password not Matching..!"
        return false;
    }
    else if((document.validationForm.gender[0].checked == false) && (document.validationForm.gender[1].checked == false)){
        error.textContent = "Select Your Gender..!"
        return false;
    }
    else if(document.validationForm.age.selectedIndex == 0){
        error.textContent = "Select Your Age Range..!"
        return false;
    }
    else if(document.validationForm.terms.checked == false){
        error.textContent = "Select Terms and Conditions..!"
        return false;
    }
    else{
        error.textContent = ""
    }
}

const images = [
    "https://images.unsplash.com/photo-1702632586803-c6b31cfb49e8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702632586744-c6b4f448e220?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702632586838-32761c24ccee?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

let currentIndex = 0;

function changeImage(){
    main.style.backgroundImage = `url(${images[currentIndex]})`
    currentIndex = (currentIndex + 1) % images.length;
}
changeImage()
setInterval(changeImage,3000)
