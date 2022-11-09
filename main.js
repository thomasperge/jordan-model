const sneakersDisplay = document.getElementById("sneakersImage");
const buttonLeft = document.getElementById("chevron-left");
const buttonRight = document.getElementById("chevron-right");

var currentSneakers = 1

// == Menu - Display Jordan (Left) ==
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

// == Menu - Display Jordan (Right) ==
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


// == Test Cursor Effect ==
document.onmousemove = function() {

    // x & y => Coordinate Mouse
    let x = event.clientX * 10 / window.innerWidth/1.8 + "%";
    let y = event.clientY * 10 / window.innerHeight/1.8 + "%";

    sneakersDisplay.style.left = x;
    sneakersDisplay.style.right = y;
    sneakersDisplay.style.transform = "translate(-" + x + ",-" + y + ")";

} 