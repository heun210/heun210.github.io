const API_KEY = "1f033465d9dbba67cc149949ad0406fc";
const COORDS = "coords";

const weatherInfo = document.querySelector(".weatherInfo");
const weatherIconImg = document.querySelector(".weatherIcon");

function onGeoOk(position) {
  //sucess Geo
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const coordsObj = {
    lat,
    lon,
    get,
  };
  saveCoords(coordsObj);
  getWeather(lat, lon);
}
function onGeoError() {
  //erro geo
  alert("Can't find you. No weather for you.");
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = data.main.temp;
      const weathers = data.weather[data.weather.length - 1];
      weahterIconImg.innerHTML = `${temp}&#176;C ${weathers.main}`;
    });
}

askCoords();
