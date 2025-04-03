export default function carousel() {
    // Initialize array to store indices
    const imgArray = [];

    // store the current data-index (default/initial value is 0) and initialize newIndex for later use
    let currentIndex = 0;
    let newIndex;

    // Populate array based on data indices of images
    function getImageData (){
        const carouselImageData = document.querySelectorAll("[data-index]");
        carouselImageData.forEach(image => {
        imgArray.push(Number(image.dataset.index));
        });
    }

    // Set up an interval for the carousel to work as a slide show. Interval is cleared when new image is rendered below
    let intervalId;

    function slideshowSetUp() {
        if (!intervalId) {
            intervalId = setInterval(rightArrowHandler, 5000);
        }
    }

    // Render function. Grab the current image, toggle it's class, update the index, grab the new image, toggle again, then reset the slideshow timer
    function renderCarousel(newIndex){
        const currentImage = document.querySelector(`[data-index = "${currentIndex}"]`);
        currentImage.classList.toggle("hidden");
        currentIndex = newIndex;
        const newImage = document.querySelector(`[data-index="${currentIndex}"]`);
        newImage.classList.toggle("hidden");
        clearInterval(intervalId);
        intervalId = null;
        slideshowSetUp();
    }
    

    // In order to render, we need to generate a new index value based on the state of the carousel
    // Left arrow functionality. If the index is 0, we go to the highest index image
    function leftArrowHandler() {
        if (currentIndex !== 0){
            newIndex = currentIndex - 1;
            renderCarousel(newIndex);
        } else {
            newIndex = imgArray.length - 1;
            renderCarousel(newIndex)
        }
    }

    // Right arrow functionality. If it is the last image in the carousel (array length - 1), we go to the first image
    function rightArrowHandler() {
        if (currentIndex !== imgArray.length - 1){
            newIndex = currentIndex + 1;
            renderCarousel(newIndex);
        } else {
            newIndex = 0;
            renderCarousel(newIndex);
        }
    }

    // Image nav dot functionality. New index is set to the corresponding button's index. Only fires if a new index is clicked.
    function clickHandler(e) {
        const clickedIndex = Number(e.target.dataset.action);
        if (clickedIndex !== currentIndex){
            newIndex = clickedIndex;
            renderCarousel(newIndex);
        } else {
            return
        }
    }

    // add carousel functionality by grabbing all the relevant buttons and attaching event listeners
    function attachEventListeners() {
        const leftArrow = document.querySelector("[data-action = 'left']");
        const rightArrow = document.querySelector("[data-action = 'right']");
        const imageNavDots = document.querySelectorAll(".img-nav > button");

        leftArrow.addEventListener("click", leftArrowHandler);
        rightArrow.addEventListener("click", rightArrowHandler);
        imageNavDots.forEach((button) => button.addEventListener("click", clickHandler));
    }
    // Initialize carousel
    getImageData();
    attachEventListeners();
    slideshowSetUp();
}