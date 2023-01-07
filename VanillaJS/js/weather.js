let geoGet = false

function onGeoSuccess(position) {
  geoGet = true;

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "6da854d8c7c347ea2aa39596d111449d";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".main-tabs-weather-city");
      const weather = document.querySelector(".main-tabs-weather-weather");
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
    });
}
function onGeoError() {
  geoGet = false
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);