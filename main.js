const page = document.querySelector("html");
const pageHeader = document.getElementById("js-site-header");
const btnNavbarTriggers = document.querySelectorAll(".js-navbar-trigger");
const btnOpenMenu = document.getElementById("js-btn-open");
const btnCloseMenu = document.getElementById("js-btn-close");

function toggleNavbar() {
  const navbarOverlay = document.getElementById("js-navbar-overlay");
  const navbarWrapper = document.getElementById("js-navbar-wrapper");
  const navbarMenu = document.getElementById("js-navbar-menu");

  const isVisible = navbarWrapper.classList.contains("is-visible");

  if (isVisible) {
    btnOpenMenu.setAttribute("aria-expanded", false);
    btnCloseMenu.setAttribute("aria-expanded", false);
    page.classList.remove("noscroll");
    navbarOverlay.classList.remove("is-visible");
    navbarWrapper.classList.remove("is-visible");

    // setTimeout(() => {
    navbarMenu.classList.add("is-open");
    // }, 500);

    btnOpenMenu.style.display = "block";
    btnCloseMenu.style.display = "none";
  } else {
    navbarMenu.classList.add("is-open");

    // setTimeout(() => {
    page.classList.add("noscroll");
    navbarOverlay.classList.add("is-visible");
    navbarWrapper.classList.add("is-visible");

    btnOpenMenu.style.display = "none";
    btnCloseMenu.style.display = "block";

    btnOpenMenu.setAttribute("aria-expanded", true);
    btnCloseMenu.setAttribute("aria-expanded", true);
    // }, 200);
  }
}

// Carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    responsiveClass: true,
    autoPlayTimeout: 1000,
    autoplaySpeed: 1800,
    smartSpeed: 800,
    autoplay: true,
    margin: 10,
    loop: true,
    center: true,
    nav: false,
    dots: true,
    items: 1,
    responsive: {
      820: {
        items: 2,
        margin: 50,
      },
      1140: {
        items: 2,
        margin: 10,
      },
      1280: {
        items: 3,
      },
    },
  });
});

let previousDistanceScrolled = 0;

function togglePageHeaderSlide() {
  const currentDistanceScrolled = Math.round(this.scrollY);

  if (
    currentDistanceScrolled === 0 ||
    previousDistanceScrolled < currentDistanceScrolled
  ) {
    pageHeader.classList.remove("site-header--sticky");
    pageHeader.classList.add("site-header--normal");
  } else {
    pageHeader.classList.add("site-header--sticky");
    pageHeader.classList.remove("site-header--normal");
  }
  previousDistanceScrolled = currentDistanceScrolled;
}

btnNavbarTriggers.forEach((btn) => btn.addEventListener("click", toggleNavbar));
window.addEventListener("scroll", togglePageHeaderSlide);
