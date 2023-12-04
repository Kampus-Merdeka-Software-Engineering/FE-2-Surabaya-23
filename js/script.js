//toggel class active
const navbarNav = document.querySelector("navbar-nav");

//Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
