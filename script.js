const menuButton = document.querySelector(".menu-button");
const navBar  = document.querySelector(".nav-bar");

menuButton.addEventListener("click",() => {
    menuButton.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    menuButton.classList.remove("active");
    navBar.classList.remove("active");
}))