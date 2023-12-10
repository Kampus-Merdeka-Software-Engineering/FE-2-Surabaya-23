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
