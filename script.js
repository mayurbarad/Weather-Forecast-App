// const icon = document.getElementsByClassName("location");

// --------------------------------------- TIME ------------------------

let d = new Date();
let da = d.getDay();
let mon = d.getMonth();
let date = d.getDate();
let year = d.getFullYear();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[mon];
let day = days[da];

const time = document.querySelector(".time");
time.innerHTML = ` <span>${day}, </span><span>${month} </span><span>${date}, </span>
<span>${year}</span>`;

// ---------------------------------------------------------------------

const apiKey = "4fded8cfc6ed7e219b7089e8395afcb0";

let cityName_1 = document.querySelector(".city_name");
let img_1 = document.querySelector(".img");
let temp_1 = document.querySelector(".temp");
let weatherDesc_1 = document.querySelector(".weather-desc");
let humidity_1 = document.querySelector(".humidity");
let windSpeed_1 = document.querySelector(".wind-speed");

function getLocation() {
  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const apiURL_lat = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    // const crd = position.coords;

    fetch(apiURL_lat)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        var cityName = data.name;
        var temp = Math.floor(data.main.temp);
        var desc = data.weather[0].description;
        var img = data.weather[0].icon;
        var humidity = data.main.humidity;
        var windSpeed = data.wind.speed;
        const imgURL = "http://openweathermap.org/img/wn/" + img + "@2x.png";

        cityName_1.innerHTML = cityName;
        img_1.innerHTML = `<img src=${imgURL}></img>`;
        temp_1.innerHTML = temp + "&deg;C";
        weatherDesc_1.innerHTML = desc;
        humidity_1.innerHTML = "Humadity   " + humidity + " %";
        windSpeed_1.innerHTML = "Wind Speed    " + windSpeed + " km/h";
      });
    const remove = document.querySelector("h3");
    remove.remove();
  }

  function error(err) {
    document.querySelector(".city_name").innerHTML = err.message;
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

// -----------------------------------------------------------------------------

const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const cityInput = document.getElementById("city").value;
  const apiURL_c = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

  fetch(apiURL_c)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      var cityName = data.name;
      var temp = Math.floor(data.main.temp);
      var desc = data.weather[0].description;
      var img = data.weather[0].icon;
      var humidity = data.main.humidity;
      var windSpeed = data.wind.speed;
      const imgURL = "http://openweathermap.org/img/wn/" + img + "@2x.png";

      cityName_1.innerHTML = cityName;
      img_1.innerHTML = `<img src=${imgURL}></img>`;
      temp_1.innerHTML = temp + "&deg;C";
      weatherDesc_1.innerHTML = desc;
      humidity_1.innerHTML = "Humadity   " + humidity + " %";
      windSpeed_1.innerHTML = "Wind Speed    " + windSpeed + " km/h";
    });
});
