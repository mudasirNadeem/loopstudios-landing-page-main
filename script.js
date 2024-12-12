
/* Select open menu button */
let btnOpenMenu = document.querySelector(".js-open-menu");

/* Select close menu button */
let btnCloseMenu = document.querySelector(".js-close-menu");

/* Select the header */
let header = document.querySelector(".header");

/* Write function to open the menu*/
function openMenu() {
    btnOpenMenu.setAttribute("aria-expanded", "true")
    header.classList.toggle("container")
}

/* Write function to close the menu*/
function closeMenu() {
    btnOpenMenu.setAttribute("aria-expanded", "false")
    header.classList.toggle("container")
}

/* Add event listener on open menu button */
btnOpenMenu.addEventListener("click", openMenu);

/* Add event listener on close menu button */
btnCloseMenu.addEventListener("click", closeMenu);

