/* default clock*/

const nowTime = document.querySelector("#nowTime");
const nowDay = document.querySelector("#nowDay");
const tabTime = document.querySelector(".main-tabs__clock-time");
const tabDay = document.querySelector(".main-tabs__clock-day");

const dayName = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear());
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");
  const days = dayName[date.getDay()];
  let amPm = "";
  let hours = 0;
  if (date.getHours() < 12) {
    amPm = "오전";
    hours = String(date.getHours());
  } else {
    amPm = "오후";
    if (date.getHours() === 12) {
      hours = String(date.getHours());
    } else {
      hours = String(date.getHours() - 12);
    }
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  nowTime.innerText = `${amPm} ${hours}:${minutes}`;
  nowDay.innerText = `${years}-${months}-${dates}`;
  tabTime.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
  tabDay.innerText = `${years}년 ${months}월 ${dates}일 ${days}`;
}

getClock();
setInterval(getClock, 1000);