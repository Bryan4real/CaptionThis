$(document).ready(function () {

  $("#in").click(function () {
    $("#in").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $("#out").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $(".login-page").fadeIn(2000);
  })

  
  $(".sms a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle"}, "slow");
  })










});