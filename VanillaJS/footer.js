const windows = document.querySelector(".footer-ui__windows");
const clock = document.querySelector(".footer-ui__clock");
const todo = document.querySelector(".footer-ui__todo");

const windowsTab = document.querySelector(".main-tabs__windows");
const clockTab = document.querySelector(".main-tabs__clock");
const todoTab = document.querySelector(".main-tabs__todo");

let windowsIsOpened = false;
let clockIsOpened = false;
let todoIsOpened = false;

function usedNow() {}

function showTab(who) {
  console.log(`${who} is clicked`);

  if (who == "windows") {
    if (windowsIsOpened == false) {
      windowsIsOpened = true;
      windowsTab.classList.remove("hidden");
    }
    if (windowsIsOpened == true) {
      windowsIsOpened = false;
      windowsTab.classList.add("hidden");
    }
  }

  if (who == "clock") {
    if (clockIsOpened == false) {
      clockIsOpened = true;
      clockTab.classList.remove("hidden");
    }
    if (clockIsOpened == true) {
      clockIsOpened = false;
      clockTab.classList.add("hidden");
    }
  }

  if (who == "todo") {
    if (todoIsOpened == false) {
      todoIsOpened = true;
      todoTab.classList.remove("hidden");
    }
    if (todoIsOpened == true) {
      todoIsOpened = false;
      todoTab.classList.add("hidden");
    }
  }

  console.log(
    `windowsIsOpened: ${windowsIsOpened}\nclockIsOpened: ${clockIsOpened}\ntodoIsOpened: ${todoIsOpened}`
  );
}

windows.addEventListener("click", () => showTab("windows"));
clock.addEventListener("click", () => showTab("clock"));
todo.addEventListener("click", () => showTab("todo"));
