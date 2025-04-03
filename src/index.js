import "./styles/modern-normalize.css";
import "./styles/styles.css";
import dropdown from "./modules/dropdown";
import carousel from "./modules/carousel";


// add dropdown functionality by grabbing the button and attaching the event listener
const menuButton = document.querySelector("nav > button");
menuButton.addEventListener("click", dropdown);

// add carousel functionality
carousel();