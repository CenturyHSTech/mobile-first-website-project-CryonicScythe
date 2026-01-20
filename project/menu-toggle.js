/*
When toggled, menu will:
-Transform/move above the screen
-Become shorter/more compact
-Hide nav content
*/

// Variables
const menuButton = document.getElementById("menu-toggle");
const mainNav = document.getElementById("all-nav");
const mainMenu = document.getElementById("all-menu");

// Toggle menu on click
menuButton.addEventListener("click", toggleEvent)

function toggleEvent() {
    mainNav.classList.toggle("minimized")
    mainMenu.classList.toggle("hidden")
}