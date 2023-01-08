const snowflakes = document.querySelector(".snowflakes");

const MIN_DURATION = 5;

function makeSnowflakes() {
  const snowflake = document.createElement("div");
  const delay = Math.random() * 10;
  const initialOpacity = Math.floor(Math.random() * 7);
  const duration = Math.random() * 10 + MIN_DURATION;

  snowflake.classList.add("snowflake");
  snowflake.style.left = `${Math.random() * window.screen.width}px`;
  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.opacity = `0.${initialOpacity}`;
  snowflake.style.animation = `showflakesFall ${duration}s linear`;

  snowflakes.appendChild(snowflake);

  setTimeout(() => {
    snowflakes.removeChild(snowflake);
    makeSnowflakes();
  }, (duration + delay) * 1000);
}

for (let i = 0; i < 50; i++) {
  setTimeout(makeSnowflakes, 250 * i);
}

const snowBtn = document.querySelector(".fa-snowflake");

function snowEffect() {
  if (localStorage.getItem("isSnowing") == "true") {
    snowflakes.classList.remove("hidden");
  }
}

function snowEnable() {
  const isSnowing = localStorage.getItem("isSnowing");
  if (isSnowing == "true") {
    localStorage.setItem("isSnowing", false);
    snowflakes.classList.add("hidden");
  } else {
    localStorage.setItem("isSnowing", true);
    snowflakes.classList.remove("hidden");
  }
}

snowEffect();
snowBtn.addEventListener("click", snowEnable);
