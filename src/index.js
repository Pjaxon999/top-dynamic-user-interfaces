import "./styles/modern-normalize.css";
import "./styles/styles.css";
import dropdown from "./modules/dropdown";


// add dropdown functionality
const menuButton = document.querySelector("nav > button");
menuButton.addEventListener("click", dropdown);
