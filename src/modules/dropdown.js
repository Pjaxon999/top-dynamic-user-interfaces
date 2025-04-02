export default function dropdown(){
    // Grab list element along with list classes, then toggle the list class of hidden
    const navList = document.querySelector("nav > ul");
    const listClasses = navList.classList;
    listClasses.toggle("hidden");
}