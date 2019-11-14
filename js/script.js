$(document).ready(function() {
  const inpfile = document.getElementById("inputImage");
  const imageContainer = document.getElementById("ImagePreview");
  const imagePreview = document.getElementById("image-field");
  const previewText = imageContainer.querySelector(".image-text");

  function Capt(text) {
    this.text = text;
  }

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

  $("#btn_comment").click(function(event) {
    let caption = $("textarea#textarea").val();
    captions = new Capt(caption);
    $("#finalorder").prepend(`<tr><td id="pName">` + captions.text + `</tr>`);

    event.preventDefault();
  });
});
