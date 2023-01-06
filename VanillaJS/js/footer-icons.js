const windows = document.querySelector(".footer-ui__windows");
const clock = document.querySelector(".footer-ui__clock");
const todo = document.querySelector(".footer-ui__todo");
const fortune = document.querySelector(".footer-ui__fortune");
const weather = document.querySelector(".footer-ui__weather");

const allClose = document.querySelector(".footer-ui__all-close");

const windowsTab = document.querySelector(".main-tabs__windows");
const clockTab = document.querySelector(".main-tabs__clock");
const todoTab = document.querySelector(".main-tabs__todo");
const fortuneTab = document.querySelector(".main-tabs__fortune");
const weatherTab = document.querySelector(".main-tabs__weather");

let windowsIsOpened = false;
let clockIsOpened = false;
let todoIsOpened = false;
let fortuneIsOpened = false;
let weatherIsOpened = false;

function usedNow() {}

function showTab(who) {
  console.log(`${who} is clicked`);

  if (who == "windows") {
    if (windowsIsOpened == false) {
      windowsIsOpened = true;
      windowsTab.classList.remove("hidden");
    } else if (windowsIsOpened == true) {
      windowsIsOpened = false;
      windowsTab.classList.add("hidden");
    }
  }

  if (who == "clock") {
    if (clockIsOpened == false) {
      clockIsOpened = true;
      clockTab.classList.remove("hidden");
    } else if (clockIsOpened == true) {
      clockIsOpened = false;
      clockTab.classList.add("hidden");
    }
  }

  if (who == "todo") {
    if (todoIsOpened == false) {
      todoIsOpened = true;
      todoTab.classList.remove("hidden");
    } else if (todoIsOpened == true) {
      todoIsOpened = false;
      todoTab.classList.add("hidden");
    }
  }

  if (who == "fortune") {
    if (fortuneIsOpened == false) {
      fortuneIsOpened = true;
      fortuneTab.classList.remove("hidden");
    } else if (fortuneIsOpened == true) {
      fortuneIsOpened = false;
      fortuneTab.classList.add("hidden");
    }
  }

  if (who == "weather") {
    if (weatherIsOpened == false) {
      weatherIsOpened = true;
      weatherTab.classList.remove("hidden");
    } else if (weatherIsOpened == true) {
      weatherIsOpened = false;
      weatherTab.classList.add("hidden");
    }
  }

  console.log(
    `windowsIsOpened: ${windowsIsOpened}\nclockIsOpened: ${clockIsOpened}\ntodoIsOpened: ${todoIsOpened}\nfortuneIsOpened: ${fortuneIsOpened}\nweatherIsOpened: ${weatherIsOpened}`
  );
}

function allTabClose() {
  if (clockIsOpened == false && todoIsOpened == false && fortuneIsOpened == false && weatherIsOpened == false) {
    clockIsOpened = true;
    todoIsOpened = true;
    fortuneIsOpened = true;
    weatherIsOpened = true;
    clockTab.classList.remove("hidden");
    todoTab.classList.remove("hidden");
    fortuneTab.classList.remove("hidden");
    weatherTab.classList.remove("hidden");
  } else {
    if (clockIsOpened == true) {
      clockIsOpened = false;
      clockTab.classList.add("hidden");
    }
    if (todoIsOpened == true) {
      todoIsOpened = false;
      todoTab.classList.add("hidden");
    }
    if (fortuneIsOpened == true) {
      fortuneIsOpened = false;
      fortuneTab.classList.add("hidden");
    }
    if (weatherIsOpened == true) {
      weatherIsOpened = false;
      weatherTab.classList.add("hidden");
    }
  }
}

windows.addEventListener("click", () => showTab("windows"));
clock.addEventListener("click", () => showTab("clock"));
todo.addEventListener("click", () => showTab("todo"));
fortune.addEventListener("click", () => showTab("fortune"));
weather.addEventListener("click", () => showTab("weather"));

allClose.addEventListener("click", allTabClose);