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

// Review Star
const allStar = document.querySelectorAll(".rating .star");
const ratingValue = document.querySelector(".rating input");

allStar.forEach((item, idx) => {
  item.addEventListener("click", function () {
    let click = 0;
    ratingValue.value = idx + 1;

    allStar.forEach((i) => {
      i.classList.replace("bxs-star", "bx-star");
      i.classList.remove("active");
    });
    for (let i = 0; i < allStar.length; i++) {
      if (i <= idx) {
        allStar[i].classList.replace("bx-star", "bxs-star");
        allStar[i].classList.add("active");
      } else {
        allStar[i].style.setProperty("--i", click);
        click++;
      }
    }
  });
});
// end Review Star
