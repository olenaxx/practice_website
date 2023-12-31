/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*------------ menu show ---------------*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*------------ menu hidden ---------------*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  navMenu.classList.remove('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  // When the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrolly >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/