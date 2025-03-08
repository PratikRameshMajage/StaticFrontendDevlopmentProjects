

function validation(){
    var fname = document.querySelector("#fname").value
    var fnamePattern = /^[a-zA-Z]{3,20}$/

    var lname = document.querySelector("#lname").value
    var lnamePattern = /^[a-zA-Z]{3,20}$/

    var pass = document.querySelector("#pass").value
    var passPattern = /^[a-zA-Z0-9]{6,15}$/

    var conPass = document.querySelector("#conPass").value

    var error = document.querySelector("#error")


    if(fname == ""){
        error.textContent = "Enter Your Name..!";
        return false;
    }
    else if(!fname.match(fnamePattern)){
        error.textContent = "Enter Your Valid Name..!";
        return false;
    }
    else if(lname == ""){
        error.textContent = "Enter Your Last Name..!";
        return false;
    }
    else if(!lname.match(lnamePattern)){
        error.textContent = "Enter Your Valid Last Name..!";
        return false;
    }
    else if(pass == ""){
        error.textContent = "Enter Password..!";
        return false;
    }
    else if(!pass.match(passPattern)){
        error.textContent = "Enter Valid Password..!";
        return false;
    }
    else if(!conPass.match(pass)){
        error.textContent = "Password is not Matching..!";
        return false;
    }
    else if(document.formValidation.course.selectedIndex == 0){
        error.textContent = "Select Course..!";
        return false;
    }
    else{
        error.textContent = "";
    }
}