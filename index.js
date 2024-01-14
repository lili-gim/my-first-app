let currentDayTime = document.querySelector("#current-day-time");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currentDay = days[now.getDay()];
let currentHour = now.getHours();
let currentMin = now.getMinutes();
currentDayTime.innerHTML = `${currentDay} ${currentHour}:${currentMin}`;

if (currentHour < 10) {
  currentHour = `0${currentHour}`;
}

if (currentMin < 10) {
  currentMin = `0${currentMin}`;
}

function enterCity(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#city-in-search");

  let city = document.querySelector("#current-city");
  city.innerHTML = searchedCity.value;

  let apiKey = "c20161a98fff44a06b23236e2obd0t3b";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchedCity.value}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temp");
  temperatureElement.innerHTML = temperature;
}

let cityInput = document.querySelector("form");
cityInput.addEventListener("submit", enterCity);
