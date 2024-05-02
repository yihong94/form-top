document.addEventListener("DOMContentLoaded", function(){

    let password = document.querySelector("#pwd").value;
    let confirmPassword = document.querySelector("#comfirmPwd").value;

    let error = document.querySelector("#error");

    if(password == "" && confirmPassword == ""){
        error.innerHTML = "*password do not match.";
    }else if(password == confirmPassword){
        error.innerHTML = "";
    }

    console.log("hi")
})