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



function login2(){



    
    
}




function login2() {

var user= document.getElementById("user").value;
var password= document.getElementById("password").value;
let popup = document.getElementById("popup")
let epopup = document.getElementById("epopup")
var error2= document.getElementById("error2").value;
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
}

