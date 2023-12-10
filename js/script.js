// //toggel class active
// const navbarNav = document.querySelector('.navbar-list');
// const hamburger = document.querySelector('#hamburger-menu');

// //Ketika hamburger menu di klik
// hamburger.addEventListener('click', function () {
//   navbarNav.classList.toggle('active');
// });

// Navbar
const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

// document.addEventListener('click', function (e) {
//   if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
//     navbarNav.classList.remove('active');
//   }
// });

// Button Active
var header = document.getElementById("button");
var btns = header.getElementsByClassName("option-type");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
// end Button Active

// Navbar Active
var header = document.getElementById("menu-list");
var btns = header.getElementsByClassName("navb");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
// end Navbar Active
