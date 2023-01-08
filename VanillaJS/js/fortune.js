const resultTitle = document.querySelector("#fr-title");

const resultArr = ["매우 안좋음", "안좋음", "보통", "좋음", "매우 좋음"];

function fortuneTest() {
  const frLocal = localStorage.getItem("fortune");
  const time = new Date();
  console.log(time.get());
  if (frLocal == null || JSON.parse(frLocal).date != time.getDate()) {
    const random = Math.floor(Math.random * 5);
    const resultObj = {
      result: resultArr[random],
      date: time.getDate(),
    };
    localStorage.setItem("fortune", JSON.stringify(resultObj));
  }
}

document
  .querySelector(".main-tabs__fortune button")
  .addEventListener("click", fortuneTest);