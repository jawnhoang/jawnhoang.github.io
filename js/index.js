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