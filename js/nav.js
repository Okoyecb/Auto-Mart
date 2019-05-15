 
  // navbar responsiveness
const navbarResponsiveness = () => {
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
};


  
let setActive = () => {
  openCity(event, 'Tokyo')
}
function openCity(evt, cityName) {
var i, x, tablinks;
x = document.getElementsByClassName("city");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
}
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " w3-red";
}
document.addEventListener("DOMContentLoaded", setActive);
