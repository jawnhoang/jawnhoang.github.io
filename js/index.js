  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function navDropDown() {
    var x = document.getElementById("my-nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }


// REDIRECTS FOR NAV BAR BEGIN //

function aboutMe(){
    var dirPath = dirname(location.href);
    fullPath = dirPath + "/index.html";
    window.location = fullPath;
}

function projects(){
    var dirPath = dirname(location.href);
    fullPath = dirPath + "/projects.html";
    window.location = fullPath;
}

function contacts(){
    var dirPath = dirname(location.href);
    fullPath = dirPath + "/contact.html";
    window.location = fullPath;
}

function dirname(path){
    return path.replace(/\\/g,'/').replace(/\/[^\/]*$/,'');
}

// REDIRECTS FOR NAV BAR END //


// REDIRECTS FOR PROJECT CARDS BEGIN //

function eyeCU(){
  var dirPath = dirname(location.href);
  fullPath = dirPath + "/eyeCU.html";
  window.location = fullPath;
}


// REDIRECTS FOR PROJECT CARD END



// SLIDE SHOW CONTROLS BEGIN //
var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
  
  // Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
  
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// SLIDE SHOW CONTROLS END //