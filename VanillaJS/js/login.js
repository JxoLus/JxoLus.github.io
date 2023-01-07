const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const pressAnyKey = document.querySelector(".press-any-key");
const passwordWrong = document.querySelector(".password-wrong");

const welcome = document.querySelector(".welcome");
const welcomeUser = document.querySelector(".welcome-user");

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
    if (localStorage.getItem("password") === password) {
      pressAnyKey.classList.remove("hidden");
      pakIsShowed = true;
      if (pwIsShowed === true) {
        passwordWrong.classList.add("hidden");
        pwIsShowed = false;
      }
    } else {
      pressAnyKey.classList.add("hidden");
      pakIsShowed = false;
    }
  }
}

function goToMainPage() {
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

function login() {
  if (localStorage.getItem("username") === null) {
    uniIsShowed = true;
  } else {
    document.querySelector(".welcome-user").innerText =
      localStorage.getItem("username");
    usernameInput.classList.add("hidden");
    welcome.style.animation = "welcomeAnimation-welcome 1s ease-in-out";
    welcome.style.animationFillMode = "forwards";
    welcomeUser.classList.remove("hidden");
    welcomeUser.style.animation = "welcomeAnimation-user 1s ease-in-out";
    welcomeUser.style.animationFillMode = "forwards";
    uniIsShowed = false;
  }
}

login();

document.body.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    goToMainPage();
  }
});
