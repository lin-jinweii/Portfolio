let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20
const scaleFactorMobile = 1 / 10;
let y = window.scrollY * scaleFactor;


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function toggleContrastMenu() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
        document.body.classList.remove("menu--open")
    }
    else {
        document.body.classList.remove("dark-theme")
        document.body.classList.remove("menu--open")
    }
}

function openMenu() {
    document.body.classList += ' menu--open'
}