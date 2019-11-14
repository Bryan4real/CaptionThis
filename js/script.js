$(document).ready(function() {
  const inpfile = document.getElementById("inpImage");
  const imageContainer = document.getElementById("ImagePreview");
  const imagePreview = document.getElementById("#image-field");
  const previewText = document.getElementById(".image-text");

  if (file) {
    const reader = new FileReader();
    previewText.style.display = "none";
    imagePreview.style.display = "block";
    reader.addEventListener("load", function() {
      imagePreview.setAttribute("src", this.result);
    });
    reader.readAsDataURL(file);
  } else {
    imagePreview.style.display = null;
    previewText.style.display = null;
    imagePreview.setAttribute("src", "");
  }

  $("#in").click(function(event) {
    $("#in").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $("#out").animate({ height: "fadeout", opacity: "toggle" }, "slow");
    $(".login-page").fadeIn(2000);
  });

  $(".sms a").click(function() {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
  });

  event.preventDefault();
});
