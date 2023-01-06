const nowTime = document.querySelector("#nowTime");
const nowDay = document.querySelector("#nowDay");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear());
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDay() + 1).padStart(2, "0");
  let amPm = "오전";
  if (date.getHours < 12) {
    let amPm = "오전";
  } else {
    let amPm = "오후";
  }
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes()).padStart(2, "0");
  nowTime.innerText = `${amPm} ${hours}:${minutes}`;
  nowDay.innerText = `${years}-${months}-${days}`;
  console.log(`time: ${amPm} ${hours}:${minutes} ${years}-${months}-${days}`);
}

getClock();
setInterval(getClock, 1000);