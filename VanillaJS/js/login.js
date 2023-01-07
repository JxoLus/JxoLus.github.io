const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pressAnyKey = document.querySelector(".press-any-key");
let pakIsShowed = false;

function getPassword() {
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (pakIsShowed === false) {
    if (username.length >= 2 && password.length >=4) {
      pressAnyKey.classList.remove("hidden");
      pakIsShowed = true;
    }
  } else if (pakIsShowed === true) {
    if (username.length  < 2 || password.length < 4) {
      pressAnyKey.classList.add("hidden");
      pakIsShowed = false;
    }
  }
}

function goToMainPage() {
  if (pakIsShowed === true) {
    location.href = "main.html"
  }
}

document.body.addEventListener("click", goToMainPage);