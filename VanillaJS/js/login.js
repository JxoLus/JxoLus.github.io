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
  if (uniIsShowed === true) {
    if (pakIsShowed === false) {
      if (username.length >= 2 && password.length >= 4) {
        pressAnyKey.classList.remove("hidden");
        pakIsShowed = true;
      }
    } else if (pakIsShowed === true) {
      if (username.length < 2 || password.length < 4) {
        pressAnyKey.classList.add("hidden");
        pakIsShowed = false;
      }
    }
  } else {
    if (pwIsShowed === true) {
      if (localStorage.getItem("password") === password) {
        console.log("enter");
        passwordWrong.classList.add("hidden");
        pressAnyKey.classList.remove("hidden");
        pakIsShowed = true;
        pwIsShowed = false;
      }
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
    document.querySelector(".welcome-user").innerText = localStorage.getItem("username");
    usernameInput.classList.add("hidden");
    document.querySelector(".welcome").style.animation = "welcomeAnimation-welcome 1s ease-in-out;";
    uniIsShowed = false;
  }
}

login();

document.body.addEventListener("click", goToMainPage);
