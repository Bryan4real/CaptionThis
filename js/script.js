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
    $("#image-uploaded").show();
    $("#comments-upload").show();
  });

  $("#btn_comment").click(function(event) {
    let caption = $("textarea#textarea").val();
    captions = new Capt(caption);
    if (caption != "") {
      $("#finalorder").prepend(`<tr><td id="pName">` + captions.text + `</tr>`);
      $("#textarea").val("");
    } else {
      alert("Please enter caption");
    }
    event.preventDefault();
  });
  $("#btn_comment1").click(function(event) {
    let caption = $("textarea#textarea1").val();
    captions = new Capt(caption);
    if (caption != "") {
      $("#finalorder1").prepend(
        `<tr><td id="pName1">` + captions.text + `</tr>`
      );
      $("#textarea1").val("");
    } else {
      alert("Please enter caption");
    }
    event.preventDefault();
  });
  $("#btn_comment2").click(function(event) {
    let caption = $("textarea#textarea2").val();
    captions = new Capt(caption);
    if (caption != "") {
      $("#finalorder2").prepend(
        `<tr><td id="pName2">` + captions.text + `</tr>`
      );
      $("#textarea2").val("");
    } else {
      alert("Please enter caption");
    }
    event.preventDefault();
  });
});
