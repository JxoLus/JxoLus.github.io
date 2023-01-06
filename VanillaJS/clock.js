const time = document.querySelector(".footer-ui__time p");

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
  // TODO: 시는 일의 자리 수 일때 앞에 0 안 붙는거 확인, 분도 확인할 것.
  const minutes = String(date.getMinutes()).padStart(2, "0");
  time.innerText = `${amPm} ${hours}:${minutes} ${years}-${months}-${days}`;
  console.log(`time: ${amPm} ${hours}:${minutes} ${years}-${months}-${days}`);
}

getClock();
setInterval(getClock, 1000);
