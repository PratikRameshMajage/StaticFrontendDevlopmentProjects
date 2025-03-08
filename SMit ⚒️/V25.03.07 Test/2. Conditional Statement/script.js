let budget = prompt("Please Enter your Budget: ");
let main = document.querySelector("#main");

if(budget >= 0 && budget <= 500){
    main.textContent = "Gully Trip";
}
else if(budget >= 501 && budget <= 1000){
    main.textContent = "Local Trip";
}
else if(budget >= 1001 && budget <= 5000){
    main.textContent = "National Trip";
}
else if(budget >= 5001 && budget <= 20000){
    main.textContent = "International Trip";
}
else{
    main.textContent = "Please, fill Valid Budget..!";
}