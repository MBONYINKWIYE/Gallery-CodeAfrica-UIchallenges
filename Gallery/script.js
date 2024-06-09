function openImage(imageSrc) {
    var single = document.getElementById("mySingle");
    var singleImg = document.getElementById("singleImage");
    single.style.display = "block";
    singleImg.src = imageSrc;
  }
  
  function closeImage() {
    var single = document.getElementById("mySingle");
    single.style.display = "none";
  }