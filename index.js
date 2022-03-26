let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20
const scaleFactorMobile = 1 / 10;
let y = window.scrollY * scaleFactor;

function openMenu() {
    document.body.classList += ' menu--open'
}

function closeMenu() {
    document.body.classList.remove('menu--open')
}

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

function closeMenu() {
    document.body.classList.remove('menu--open')
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
}

function toggleModalMenu() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open"
    document.body.classList.remove('menu--open')
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal_overlay--loading");
    const success = document.querySelector(".modal_overlay--success");
    loading.classList += " modal_overlay--visible";
    emailjs
      .sendForm(
        "service_7by9q6g",
        "template_7m8ykp9",
        event.target,
        "user_f2vttY9rqtPGHh17rdjwf"
      )
      .then(() => {
        loading.classList.remove("modal_overlay--visible");
        success.classList += " modal_overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal_overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on linjinwei2802@gmail.com"
        );
      });
  }