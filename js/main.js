// console.log("Helllo");

// let firstObj = {
//   name: "hello",
// };
// let secondObj = firstObj;
// firstObj.name = "hjkljhj";

// firstObj = { name: "Bye" };
// console.log(secondObj.name);

// navigation menu
const body = document.body;

const navBtn = document.getElementById("navBtn");
const navWrapper = document.getElementById("navWrapper");
const navBackdrop = document.querySelector(".nav-wrapper-backdrop");

if (navBtn && navWrapper) {
  navBtn.setAttribute("aria-expanded", false);

  navBtn.addEventListener("click", (e) => {
    // console.log("navBtn2: ", navBtn);

    navBackdrop.classList.toggle("backdrop");

    navBtn.classList.toggle("nav-active");
    navWrapper.classList.toggle("nav-active");
    body.classList.toggle("overflow-hidden");

    navBtn.classList.contains("nav-active")
      ? navBtn.setAttribute("aria-expanded", true)
      : navBtn.setAttribute("aria-expanded", false);
  });
}

// slider
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "-90px",
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 880,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          centerPadding: "90px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});
