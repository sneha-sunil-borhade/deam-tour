let user= document.getElementById("user");
let loginBtn= document.getElementById("loginBtn");
let placeName= document.getElementById("placeName");
let Submit= document.getElementById("Submit");

user.addEventListener("click",function () {
    document.querySelector(".loginPage").classList.toggle("active1");
})

loginBtn.addEventListener("click",function(){

    let email =document.getElementById("email")
    let pass =document.getElementById("pass")
    if(email.value==""&& pass.vale==""){
        alert("Please Fill Details")
    }else{
        alert("You Logged In")
        document.querySelector(".loginPage").style.display= "none"
    }
})
Submit.addEventListener("click",function () {
    if(placeName.value==""){
        alert("Fill Form")
    }else{
        alert(placeName.value +"Tour Booked")
    }
})