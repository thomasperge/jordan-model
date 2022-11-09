const sneakersDisplay = document.getElementById("sneakersImage");
const buttonLeft = document.getElementById("chevron-left");
const buttonRight = document.getElementById("chevron-right");

var currentSneakers = 1

buttonLeft.addEventListener('click', function handleClick() {
    if(currentSneakers == 1) {
        sneakersDisplay.setAttribute("src", "assets/sneaker3.png")
        currentSneakers = 3
    } else if(currentSneakers == 2) {
        sneakersDisplay.setAttribute("src", "assets/sneaker.png")
        currentSneakers = 1
    } else if(currentSneakers == 3) {
        sneakersDisplay.setAttribute("src", "assets/sneaker2.png")
        currentSneakers = 2
    }
});

buttonRight.addEventListener('click', function handleClick() {
    if(currentSneakers == 1) {
        sneakersDisplay.setAttribute("src", "assets/sneaker2.png")
        currentSneakers = 2
    } else if(currentSneakers == 2) {
        sneakersDisplay.setAttribute("src", "assets/sneaker3.png")
        currentSneakers = 3
    } else if(currentSneakers == 3) {
        sneakersDisplay.setAttribute("src", "assets/sneaker.png")
        currentSneakers = 1
    }
});
