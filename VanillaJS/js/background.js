let currentBackground = 100;
backgroundChange();
function backgroundChange() {
  const BODY = document.body;

  const random = Math.floor(Math.random() * 3);
  
  if (currentBackground != 100 && random === currentBackground) {
    return backgroundChange();
  }
  
  if (currentBackground === 0) {
    BODY.classList.remove("chosenOne");
  } else if (currentBackground === 1) {
    BODY.classList.remove("chosenTwo");
  } else if (currentBackground === 2) {
    BODY.classList.remove("chosenThree");
  }

  if (random === 0) {
    BODY.classList.add("chosenOne");
    currentBackground = 0;
  } else if (random === 1) {
    BODY.classList.add("chosenTwo");
    currentBackground = 1;
  } else {
    BODY.classList.add("chosenThree");
    currentBackground = 2;
  }
}

document.querySelector(".fa-image").addEventListener("click", backgroundChange);
