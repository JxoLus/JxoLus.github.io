const allClose = document.querySelector(".footer-ui__all-close");

const windowsTab = document.querySelector(".main-tabs__windows");
const clockTab = document.querySelector(".main-tabs__clock");
const todoTab = document.querySelector(".main-tabs__todo");
const fortuneTab = document.querySelector(".main-tabs__fortune");
const weatherTab = document.querySelector(".main-tabs__weather");
const userInfoTab = document.querySelector(".main-tabs__user-info");

let windowsIsOpened = false;
let userInfoIsOpened = true;
let clockIsOpened = false;
let todoIsOpened = false;
let fortuneIsOpened = false;
let weatherIsOpened = false;

function showTab(who) {
  const footerUiWho = document.querySelector(`.footer-ui__${who}`);
  const mainTabsWho = document.querySelector(`.main-tabs__${who}`);

  if (
    mainTabsWho.classList.item(mainTabsWho.classList.length - 1) === "hidden"
  ) {
    if (who != "windows") {
      footerUiWho.classList.add("usedNow");
    }
    mainTabsWho.classList.remove("hidden");
  } else {
    if (who != "windows") {
      footerUiWho.classList.remove("usedNow");
    }
    mainTabsWho.classList.add("hidden");
  }
}

function allTabClose() {
  const allTabsName = ["user-info", "clock", "todo", "fortune", "weather"];

  let isAllClosed = 0;

  for (let i = 0; i < allTabsName.length; i++) {
    let whoIsUsedNow = document.querySelector(`.footer-ui__${allTabsName[i]}`);
    let whoIsOpened = document.querySelector(`.main-tabs__${allTabsName[i]}`);
    if (
      whoIsOpened.classList.item(whoIsOpened.classList.length - 1) === "hidden"
    ) {
      isAllClosed++;
    }
  }

  console.log(isAllClosed);

  if (isAllClosed === allTabsName.length) {
    for (let i = 0; i < allTabsName.length; i++) {
      let whoIsUsedNow = document.querySelector(
        `.footer-ui__${allTabsName[i]}`
      );
      let whoIsOpened = document.querySelector(`.main-tabs__${allTabsName[i]}`);
      whoIsUsedNow.classList.add("usedNow");
      whoIsOpened.classList.remove("hidden");
    }
  } else {
    for (let i = 0; i < allTabsName.length; i++) {
      let whoIsUsedNow = document.querySelector(
        `.footer-ui__${allTabsName[i]}`
      );
      let whoIsOpened = document.querySelector(`.main-tabs__${allTabsName[i]}`);
      if (
        whoIsOpened.classList.item(whoIsOpened.classList.length - 1) != "hidden"
      ) {
        whoIsOpened.classList.add("hidden");
        whoIsUsedNow.classList.remove("usedNow");
      }
    }
  }
  document.querySelector(".main-tabs__windows").classList.add("hidden");
}

/* showTab() */

document
  .querySelector(".footer-ui__windows")
  .addEventListener("click", () => showTab("windows"));

document
  .querySelector(".footer-ui__user-info")
  .addEventListener("click", () => showTab("user-info"));

document
  .querySelector(".footer-ui__clock")
  .addEventListener("click", () => showTab("clock"));

document
  .querySelector(".footer-ui__todo")
  .addEventListener("click", () => showTab("todo"));

document
  .querySelector(".footer-ui__fortune")
  .addEventListener("click", () => showTab("fortune"));

document
  .querySelector(".footer-ui__weather")
  .addEventListener("click", () => showTab("weather"));

document
  .querySelector(".footer-ui__time")
  .addEventListener("click", () => showTab("clock"));

/* herf */

document
  .querySelector(".footer-ui__youtube")
  .addEventListener("click", () => window.open("https://youtube.com"));

document
  .querySelector(".footer-ui__facebook")
  .addEventListener("click", () => window.open("https://facebook.com"));

document
  .querySelector(".footer-ui__github")
  .addEventListener("click", () => window.open("https://github.com"));

document
  .querySelector(".footer-ui__google")
  .addEventListener("click", () => window.open("https://google.com"));

document
  .querySelector(".footer-ui__instagram")
  .addEventListener("click", () => window.open("https://instagram.com"));

allClose.addEventListener("click", allTabClose);
