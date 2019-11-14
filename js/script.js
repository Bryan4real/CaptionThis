$(document).ready(function() {
  const inpfile = document.getElementById("inputImage");
  const imageContainer = document.getElementById("ImagePreview");
  const imagePreview = document.getElementById("image-field");
  const previewText = imageContainer.querySelector(".image-text");
  inpfile.addEventListener("change", function() {
    const file = this.files[0];

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
  });

  $("#a-upload").click(function(event) {
    $("#inputImage").click();
  });

  event.preventDefault();
});
