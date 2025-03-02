var formValidation = document.getElementById("formValidation")

formValidation.addEventListener("submit", function(e){
    e.preventDefault()

    function validation(){

        var fname = document.getElementById("fname").value
        fnamePattern = /^[A-Za-z]{3,20}$/;

        var uname = document.getElementById("uname").value
        unamePattern = /^[A-Za-z0-9]{3,20}$/;

        var mail = document.getElementById("mail").value
        mailPattern = /^[A-Za-z0-9]{2,10}$/;

        var pass = document.getElementById("pass").value
        passPattern = /^[A-Za-z0-9]{2,10}$/;

        let isValid = true;

        if(fname == ""){
            document.getElementById("error").textContent = "Please Enter Your Name...!";
            isValid = false;
        }
        else if(!fname.match(fnamePattern)){
            document.getElementById("error").textContent = "Please Enter Valid Name...!";
            isValid = false;
        }
        else if(uname == ""){
            document.getElementById("error").textContent = "Please Enter Your User Name...!";
            isValid = false;
        }
        else if(!uname.match(unamePattern)){
            document.getElementById("error").textContent = "Please Enter Valid User Name...!";
            isValid = false;
        }
        else if(mail == ""){
            document.getElementById("error").textContent = "Please Enter Email...!";
            isValid = false;
        }
        else if(!mail.match(mailPattern)){
            document.getElementById("error").textContent = "Please Enter Valid Email...!";
            isValid = false;
        }
        else if(pass == ""){
            document.getElementById("error").textContent = "Please Enter Password...!";
            isValid = false;
        }
        else if(!pass.match(passPattern)){
            document.getElementById("error").textContent = "Please Enter Valid Password...!";
            isValid = false;
        }
        else if(!conPass.match(pass)){
            document.getElementById("error").textContent = "Please Enter Valid Confirm Password...!";
            isValid = false;
        }
        else{
            document.getElementById("error").textContent = "";

        }

        if(isValid == true){
            alert("Form submitted successfully! ✅");
            formValidation.submit();
        }
    }
    validation()
})

