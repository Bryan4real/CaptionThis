$(document).ready(function () {
  const inpfile = document.getElementById("inpImage");
  const imageContainer = document.getElementById("ImagePreview");
  const imagePreview = document.getElementById("#image-field");
  const previewText = document.getElementById(".image-text");











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