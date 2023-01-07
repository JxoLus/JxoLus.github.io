let currentBackground = 100;

function backgroundChange() {
  const BODY = document.body;

  if (currentBackground === 1) {
    BODY.classList.remove("chosenOne");
  } else if (currentBackground === 2) {
    BODY.classList.remove("chosenTwo");
  } else if (currentBackground === 3) {
    BODY.classList.remove("chosenThree");
  }

  const random = Math.floor(Math.random() * 3);

  console.log(random + 1, currentBackground);
  if (currentBackground != 100 && random + 1 == currentBackground) {
    backgroundChange();
  }

  if (random === 0) {
    BODY.classList.add("chosenOne");
    currentBackground = 1;
  } else if (random === 1) {
    BODY.classList.add("chosenTwo");
    currentBackground = 2;
  } else {
    BODY.classList.add("chosenThree");
    currentBackground = 3;
  }

  console.log(currentBackground);
}

backgroundChange();

document.querySelector(".fa-image").addEventListener("click", backgroundChange);
