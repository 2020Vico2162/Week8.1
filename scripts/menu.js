const toggle = document.querySelector(".nav-button");
const menu = document.querySelector("#main-nav-list");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.innerHTML = "&#9776;"
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.innerHTML = "X";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);