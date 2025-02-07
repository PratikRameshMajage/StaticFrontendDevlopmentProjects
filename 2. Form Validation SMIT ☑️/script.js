const formValidation = document.querySelector("#formValidation") 

formValidation.addEventListener("submit",(e)=>{
    e.preventDefault()

    let validation = ()=>{
        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value
        let password = document.querySelector("#password").value
        let confPass = document.querySelector("#confPass").value
        let error = document.querySelector(".error")
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let isValid = true;
        error.textContent = "";

        if(name.trim() === ""){
            error.textContent = "Name is required!"
            isValid = false
        }
        else if(!email.match(emailPattern)){
            error.textContent = "Enter a valid email."
            isValid = false
        }
        else if(password.length < 8){
            error.textContent = "Password must be at least 8 characters!"
            isValid = false
        }
        else if(confPass != password){
            error.textContent = "Confirm Password must be same as Password!"
            isValid = false
        }
        else{
            error.textContent = "";
        }

        if(isValid == true){
            alert("Form submitted successfully! ✅");
            formValidation.submit();
        }
    }

    validation()

})