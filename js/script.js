const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav__menu");

burger.addEventListener("click", function () {
    navMenu.classList.toggle("open")
    if(this.classList.toggle("active")){
        document.body.style.overflow = "hidden";
    } else{
        document.body.style.overflow = "auto";
    }
});