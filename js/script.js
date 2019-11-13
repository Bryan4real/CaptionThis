
function captionThis() { 
    
	let name = document.getElementById("usnam").value;
	let email = document.getElementById("ema").value;
  let password = document.getElementById("pass").value;
  
  
	if (name == "") {
    window.alert("Please enter your name.");
  name.focus();
  return false;
}


if (email == "") {
    window.alert("Please enter a valid e-mail address.");
  email.focus();
  return false;
}

if (password == "") {
    window.alert("Please enter your password");
  password.focus();
  return false;
}

return true;
}





  
$(document).ready(function () {

  $("#in").click(function (event) {
    $("#in").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $("#out").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $(".login-page").fadeIn(2000);
  })


  $(".sms a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  })









  event.preventDefault();

});