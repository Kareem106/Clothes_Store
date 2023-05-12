let BurgerMenu=document.getElementById("burger-menu");
let header=document.getElementById("header");
BurgerMenu.addEventListener("click",()=>{
    header.classList.toggle("open");
});