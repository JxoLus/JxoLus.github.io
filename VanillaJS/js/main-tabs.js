const logOutBtn = document.querySelector(".fa-power-off");
const accountDeleteBtn = document.querySelector(".fa-trash");

const welcomeName = document.querySelector(".main-tabs__user-info__name");
const welcomeMessage = document.querySelector(".main-tabs__user-info__message");

const username = localStorage.getItem("username");

logOutBtn.addEventListener("click", () => (location.href = "login.html"));
accountDeleteBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  localStorage.removeItem("isSnowing");
  location.href = "login.html";
});

welcomeName.innerText = username;

welcomeMessage.innerText = `반갑습니다 ${username}님`;
