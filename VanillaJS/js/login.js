const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pressAnyKey = document.querySelector(".press-any-key");
const passwordWrong = document.querySelector(".password-wrong");

let username = usernameInput.value;
let password = passwordInput.value;
let pakIsShowed = false;
let pwIsShowed = false;
let uniIsShowed = true;

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
  if (pwIsShowed === true) {
    if (localStorage.getItem("password") === password) {
      passwordWrong.classList.add("hidden");
      pwIsShowed = false;
    }
  }
}

function goToMainPage() {
  if (pakIsShowed === true) {
    if (uniIsShowed === true) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      location.href = "main.html";
    } else {
      if (localStorage.getItem("password") === password) {
        location.href = "main.html";
      } else {
        passwordWrong.classList.remove("hidden");
        pwIsShowed = true;
      }
    }
  }
}

function login() {
  if (localStorage.getItem("username") === null) {
    uniIsShowed = true;
  } else {
    usernameInput.classList.add("hidden");
    uniIsShowed = false;
  }
}

login();

console.log(localStorage.getItem("username"))
document.body.addEventListener("click", goToMainPage);

