const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pressAnyKey = document.querySelector(".press-any-key");
let username = usernameInput.value;
let password = passwordInput.value;
let pakIsShowed = false;

function getPassword() {
  username = usernameInput.value;
  password = passwordInput.value;
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
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    location.href = "main.html";
  }
}

document.body.addEventListener("click", goToMainPage);