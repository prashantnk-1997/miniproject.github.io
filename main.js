var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "100px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}



function login2() {

var user= document.getElementById("user").value;
var password= document.getElementById("password").value;
let popup = document.getElementById("popup")
let epopup = document.getElementById("epopup")
if (user=="admin" && password=="1234"){
    popup.classList.add("open-popup");
}
else{
    document.getElementById('error2').innerHTML="Note: <br> User ID: admin <br>Password: 1234"
    epopup.classList.add("enpopup");
   
}

    
}

function closepopup() {
    popup.classList.remove("open-popup");
    epopup.classList.remove("enpopup");
    rpopup.classList.remove("r-popup");
    repopup.classList.remove("re-popup");

}

function register2(){
    var userid= document.getElementById("userid").value;
    var email= document.getElementById("email").value;
    var pass= document.getElementById("pass").value;
   
    let rpopup = document.getElementById("rpopup")
    let repopup = document.getElementById("repopup")


    if (userid=="" || pass=="" || email =="" || condition.checked == false ){
        repopup.classList.add("re-popup");
        document.getElementById('error3').innerHTML="Please Fill All Details"
         
    }
    else{
        
    rpopup.classList.add("r-popup");
    }

    

}
