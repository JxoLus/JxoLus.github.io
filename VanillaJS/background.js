function backgroundChange() {
  const random = Math.floor(Math.random() * 3);
  if (random === 1) {
    document.body.classList.add("chosenOne");
  } else if (random === 2) {
    document.body.classList.add("chosenTwo");
  } else {
    document.body.classList.add("chosenThree");
  }
}

backgroundChange();
