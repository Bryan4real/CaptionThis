





  
$(document).ready(function () {


  
  $(".sms a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  })

  $("#submit").click(function (event) {
    let name = $("#regname").val();
    let email = $("#regmail").val();
    let password = $("#regpass").val();
    let confirm = $("#regconfirm").val();

    if (name == "") {
      $("#name-error").addClass("alert alert-danger").text("Enter Name");
    } else if (email == "") {
      $("#email-error").addClass("alert alert-danger").text("Enter Email");
    } else if (password == "") {
      $("#password-error").addClass("alert alert-danger").text("Enter Password");
    } else if (confirm = "") {
      $("#confirm-error").addClass("alert alert-danger").text("Confirm Password");
    } else if (password != confirm) {
      $("#confirm-error").addClass("alert alert-danger").text("Password Does not Match");
    } else {
      $("#confirm-error").val("");
      $("#password-error").val("");
      $("#email-error").val("");
      $("#confirm-error").val("");
      $("#confirm-error").val("");
    }
    
    event.preventDefault();

    $("#log").click(function () {
      $(this).hide();
    })
  })








  

});






