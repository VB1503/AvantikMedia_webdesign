'use strict';




// ? Add Event on Elements ? //

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.header__menuIcon');
  const menuIconLines = document.querySelectorAll('.header__menuIconLine');
  const navLinks = document.querySelectorAll('.navbar-link');
  menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('open1');
  });
  const closebar = function () {
  navbarList.classList.remove('hide');
  navbarList.classList.remove('hidden');
  menuIcon.classList.toggle('open1');
  }
  addEventOnElem(navLinks, "click", closebar);
});

// ? Navbar Toggle ? //

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");
const navbarList = document.querySelector('.navbar-list');
const menuIcon = document.querySelector('.header__menuIcon');
const toggleNavigate = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavigate);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");


}

addEventOnElem(navbarLinks, "click", closeNavbar);
document.addEventListener("DOMContentLoaded", function() {
  const navbarList = document.querySelector('.navbar-list');

  let prevScrollpos = window.pageYOffset;

  window.addEventListener('scroll', function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
          navbarList.classList.remove('hidden');


          
      } else {
          navbarList.classList.add('hidden');

      }
      prevScrollpos = currentScrollPos;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const headerMenuIcon = document.querySelector('.header__menuIcon');
  const navbarList = document.querySelector('.navbar-list');
  headerMenuIcon.addEventListener('click', function() {
      navbarList.classList.toggle('hide');
      navbarList.classList.remove('hidden');


  });
});




// ? Header & back top btn show when scroll down to 100px ? //

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtn = document.getElementById("openPopup");
  const closePopupBtn = document.getElementById("closePopup");
  const videoPopup = document.getElementById("videoPopup");
  const videoPlayer = document.getElementById("videoPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");

  openPopupBtn.addEventListener("click", function() {
    videoPopup.style.display = "block";
  });

  closePopupBtn.addEventListener("click", function() {
    videoPopup.style.display = "none";
    videoPlayer.pause(); // Pause the video when closing the popup
  });

  playPauseBtn.addEventListener("click", function() {
    if (videoPlayer.paused) {
      videoPlayer.play();
    } else {
      videoPlayer.pause();
    }
  });
});
