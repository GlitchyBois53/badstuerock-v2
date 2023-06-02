
// Script for opening and closing the menu, turning the arrow next to 'menu', and fades in the menu content


// Assign the html elements to variables in JS for the desktop menu

var navMenu = document.getElementById("nav-menu")
var menuArrow = document.getElementById("menu-arrow")
var navContent = document.getElementById("nav-content")


// Functionality for the desktop menu

function navToggle() {
    if (navMenu.classList.contains("nav-neutral") || navMenu.classList.contains("nav-not-active")) {
        navMenu.classList.remove("nav-not-active")
        navMenu.classList.add("nav-active")
        navMenu.classList.remove("nav-neutral")
        menuArrow.classList.add("menu-arrow-active")
        menuArrow.classList.remove("menu-arrow-not-active")
        navContent.classList.add("nav-content-active")
        navContent.classList.remove("nav-content-not-active")
    }
    else {
        navMenu.classList.add("nav-not-active")
        navMenu.classList.remove("nav-active")
        menuArrow.classList.add("menu-arrow-not-active")
        menuArrow.classList.remove("menu-arrow-active")
        navContent.classList.remove("nav-content-active")
        navContent.classList.add("nav-content-not-active")   
    }
}


// Assign the html element to a variable in JS for the mobile menu

var mobileNav = document.getElementById("mobile-menu")


// Functionality for the mobile menu

function mobileNavToggle() {
    if (mobileNav.classList.contains("mobile-not-active")) {
        mobileNav.classList.add("mobile-active")
        mobileNav.classList.remove("mobile-not-active")
    }
    else {
        mobileNav.classList.remove("mobile-active")
        mobileNav.classList.add("mobile-not-active")
    }
    navToggle()
}