// navbar toggler
function Open(){
    document.getElementById('hamburger').classList.toggle('opened')
    document.getElementById('nav-menu').classList.toggle('nav-links-expanded')
    document.getElementById('nav-menu-back').classList.toggle('nav-links-expanded2')
    document.querySelector('body').classList.toggle('scroll-disable')
}
// navbar toggler

// accordion function
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active-accordion");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// accordion function
