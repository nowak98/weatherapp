let weather = {
  apiKey: "5961e4cebf810feb6cfd39e1820c64fd",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = `${name}`;
    document.querySelector(
      ".icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(".description").innerText =
      description.charAt(0).toUpperCase() + description.slice(1);
    document.querySelector(".temp").innerText = `${temp}°C`;
    if (temp < 0) {
      document.querySelector(".icon").style.backgroundColor = "#082284";
      document.querySelector("body").style.backgroundImage =
        "url(/bg-snow.jpg)";
    } else if (temp >= 0 && temp < 5) {
      document.querySelector(".icon").style.backgroundColor = "#DBEFF3";
      document.querySelector("body").style.backgroundImage = "url(/bg05.jpg)";
    } else if (temp >= 5 && temp < 10) {
      document.querySelector(".icon").style.backgroundColor = "#AEA9BA";
      document.querySelector("body").style.backgroundImage = "url(/bg510.jpg)";
    } else if (temp >= 10 && temp < 15) {
      document.querySelector(".icon").style.backgroundColor = "#c88669";
      document.querySelector("body").style.backgroundImage = "url(/bg1015.jpg)";
    } else if (temp >= 15 && temp < 20) {
      document.querySelector(".icon").style.backgroundColor = "#1a2d20";
      document.querySelector("body").style.backgroundImage = "url(/bg1520.jpg)";
    } else if (temp >= 20 && temp < 25) {
      document.querySelector(".icon").style.backgroundColor = "#dcb5c7";
      document.querySelector("body").style.backgroundImage = "url(/bg2025.jpg)";
    } else if (temp >= 25 && temp < 30) {
      document.querySelector(".icon").style.backgroundColor = "#E5E967";
      document.querySelector("body").style.backgroundImage = "url(/bg2530.jpg)";
    } else if (temp >= 30) {
      document.querySelector(".icon").style.backgroundColor = "#F83232";
      document.querySelector("body").style.backgroundImage = "url(/bg30.jpg)";
    }
    document.querySelector(".humidity").innerText = `Humidity: ${humidity}%`;
    document.querySelector(".wind").innerText = `Wind speed: ${speed}km/h`;
  },
  search: function () {
    this.fetchWeather(document.querySelector(".searchbar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".searchbar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Szczecin");

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();
