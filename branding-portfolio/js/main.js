// ADD YOUR JAVASCRIPT HERE

let menuBtn = document.getElementsByClassName('menu-btn')
let mobileMenu = document.getElementsByClassName('mobile-menu')

let clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}



menuBtn[0].addEventListener('click', clickedBtn)

console.log(menuBtn[0])