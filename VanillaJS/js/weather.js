const weatherNow = document.querySelector(".main-tabs__weather-weather");
const API_KEY = "6da854d8c7c347ea2aa39596d111449d";

let geoGet = false;

function onGeoSuccess(position) {
  geoGet = true;

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherNow.innerText = `${data.name} / ${data.main.temp}°C`;
    });
}
function onGeoError() {
  geoGet = false;
  alert("location fail");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
