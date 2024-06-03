
  document.addEventListener("DOMContentLoaded", function() {

    var settingsMenu = document.querySelector(".setting-menu");
    if (settingsMenu) {
      settingsMenu.classList.remove("setting-menu-height");

      function settingsMenuToggle() {
        settingsMenu.classList.toggle("setting-menu-height");
      }

      var navUserIcon = document.querySelector(".nav-user-icon");
      if (navUserIcon) {
        navUserIcon.addEventListener("click", settingsMenuToggle);
      }
    }
  });
  document.addEventListener("DOMContentLoaded", function() {
    var darkBtn = document.querySelector("#dark-btn");
    var body = document.querySelector("body");      
    var currentTheme = localStorage.getItem("theme");
    if(currentTheme == "dark"){ 
        darkBtn.classList.add("dark-btn-on");
        body.classList.add("dark-theme");
    }
    else{
        darkBtn.classList.remove("dark-btn-on");
        body.classList.remove("dark-theme");
    }

    darkBtn.addEventListener("click", function() {

        if(localStorage.getItem("theme") == "light"){ 
            localStorage.setItem("theme","dark");
            darkBtn.classList.add("dark-btn-on");
            body.classList.add("dark-theme");
        }
        else{
            localStorage.setItem("theme","light");
            darkBtn.classList.remove("dark-btn-on");
            body.classList.remove("dark-theme");
        }
    });
});
function myFunction(x) {
  x.classList.toggle("change");
  const homeLeft = document.querySelector(".home-left");
  homeLeft.classList.toggle("show");
}
  